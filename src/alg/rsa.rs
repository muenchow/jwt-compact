//! RSA-based JWT schemes: `RS*` and `PS*`.

pub use rsa::{RSAPrivateKey, RSAPublicKey};

use rand_core::{CryptoRng, RngCore};
use rsa::{hash::Hash, PaddingScheme, PublicKey};
use sha2::{Digest, Sha256, Sha384, Sha512};
use thiserror::Error;

use std::{borrow::Cow, convert::TryFrom};

use crate::{Algorithm, AlgorithmSignature};

/// RSA signature.
#[derive(Debug)]
pub struct RsaSignature(Vec<u8>);

impl AlgorithmSignature for RsaSignature {
    fn try_from_slice(bytes: &[u8]) -> anyhow::Result<Self> {
        match bytes.len() {
            256 | 384 | 512 => Ok(RsaSignature(bytes.to_vec())),
            _ => Err(anyhow::anyhow!("Unsupported signature length")),
        }
    }

    fn as_bytes(&self) -> Cow<[u8]> {
        Cow::Borrowed(&self.0)
    }
}

/// RSA hash algorithm.
#[derive(Debug, Copy, Clone, Eq, PartialEq)]
enum HashAlg {
    Sha256,
    Sha384,
    Sha512,
}

impl HashAlg {
    fn as_hash(self) -> Hash {
        match self {
            Self::Sha256 => Hash::SHA2_256,
            Self::Sha384 => Hash::SHA2_384,
            Self::Sha512 => Hash::SHA2_512,
        }
    }

    fn digest(self, message: &[u8]) -> Box<[u8]> {
        match self {
            Self::Sha256 => {
                let digest: [u8; 32] = *(Sha256::digest(message).as_ref());
                Box::new(digest)
            }
            Self::Sha384 => {
                let mut digest = [0_u8; 48];
                digest.copy_from_slice(Sha384::digest(message).as_ref());
                Box::new(digest)
            }
            Self::Sha512 => {
                let mut digest = [0_u8; 64];
                digest.copy_from_slice(Sha512::digest(message).as_ref());
                Box::new(digest)
            }
        }
    }
}

/// RSA padding algorithm.
#[derive(Debug, Copy, Clone, Eq, PartialEq)]
enum Padding {
    Pkcs1v15,
    Pss,
}

/// Bit length of an RSA key modulus (aka RSA key length).
#[derive(Debug, Copy, Clone, Eq, PartialEq)]
#[non_exhaustive]
pub enum ModulusBits {
    /// 2048 bits. This is the minimum recommended key length as of 2020.
    TwoKilobytes,
    /// 3072 bits.
    ThreeKilobytes,
    /// 4096 bits.
    FourKilobytes,
}

impl ModulusBits {
    /// Converts this length to the numeric value.
    pub fn bits(self) -> usize {
        match self {
            Self::TwoKilobytes => 2_048,
            Self::ThreeKilobytes => 3_072,
            Self::FourKilobytes => 4_096,
        }
    }
}

impl TryFrom<usize> for ModulusBits {
    type Error = ModulusBitsError;

    fn try_from(value: usize) -> Result<Self, Self::Error> {
        match value {
            2_048 => Ok(Self::TwoKilobytes),
            3_072 => Ok(Self::ThreeKilobytes),
            4_096 => Ok(Self::FourKilobytes),
            _ => Err(ModulusBitsError(())),
        }
    }
}

/// Error type returned when a conversion of an integer into `ModulusBits` fails.
#[derive(Debug, Error)]
#[error("Unsupported bit length of RSA modulus; only lengths 2048, 3072 and 4096 are supported.")]
pub struct ModulusBitsError(());

/// Integrity algorithm using [RSA] digital signatures.
///
/// Depending on the variation, the algorithm employs PKCS#1 v1.5 or PSS padding and
/// one of the hash functions from the SHA-2 family: SHA-256, SHA-384, or SHA-512.
/// See [RFC 7518] for more details. Depending on the chosen parameters,
/// the name of the algorithm is one of `RS256`, `RS384`, `RS512`, `PS256`, `PS384`, `PS512`:
///
/// - `R` / `P` denote the padding scheme: PKCS#1 v1.5 for `R`, PSS for `P`
/// - `256` / `384` / `512` denote the hash function
///
/// The length of RSA keys is not unequivocally specified by the algorithm; nevertheless,
/// it **MUST** be at least 2048 bits as per RFC 7518. To minimize risks of misconfiguration,
/// this implementation only supports key lengths specified by the [`ModulusBits`] enum.
///
/// *This type is available if the crate is built with the `rsa` feature.*
///
/// [RSA]: https://en.wikipedia.org/wiki/RSA_(cryptosystem)
/// [RFC 7518]: https://www.rfc-editor.org/rfc/rfc7518.html
/// [`ModulusBits`]: enum.ModulusBits.html
#[derive(Debug)]
pub struct Rsa {
    hash_alg: HashAlg,
    padding_alg: Padding,
}

impl Algorithm for Rsa {
    type SigningKey = RSAPrivateKey;
    type VerifyingKey = RSAPublicKey;
    type Signature = RsaSignature;

    fn name(&self) -> Cow<'static, str> {
        Cow::Borrowed(self.name())
    }

    fn sign(&self, signing_key: &Self::SigningKey, message: &[u8]) -> Self::Signature {
        self.sign(signing_key, message)
    }

    fn verify_signature(
        &self,
        signature: &Self::Signature,
        verifying_key: &Self::VerifyingKey,
        message: &[u8],
    ) -> bool {
        self.verify_signature(signature, verifying_key, message)
    }
}

impl Rsa {
    const fn new(hash_alg: HashAlg, padding_alg: Padding) -> Self {
        Rsa {
            hash_alg,
            padding_alg,
        }
    }

    /// RSA with SHA-256 and PKCS#1 v1.5 padding.
    pub const fn rs256() -> Rsa {
        Rsa::new(HashAlg::Sha256, Padding::Pkcs1v15)
    }

    /// RSA with SHA-384 and PKCS#1 v1.5 padding.
    pub const fn rs384() -> Rsa {
        Rsa::new(HashAlg::Sha384, Padding::Pkcs1v15)
    }

    /// RSA with SHA-512 and PKCS#1 v1.5 padding.
    pub const fn rs512() -> Rsa {
        Rsa::new(HashAlg::Sha512, Padding::Pkcs1v15)
    }

    /// RSA with SHA-256 and PSS padding.
    pub const fn ps256() -> Rsa {
        Rsa::new(HashAlg::Sha256, Padding::Pss)
    }

    /// RSA with SHA-384 and PSS padding.
    pub const fn ps384() -> Rsa {
        Rsa::new(HashAlg::Sha384, Padding::Pss)
    }

    /// RSA with SHA-512 and PSS padding.
    pub const fn ps512() -> Rsa {
        Rsa::new(HashAlg::Sha512, Padding::Pss)
    }

    fn padding_scheme(&self) -> PaddingScheme {
        match self.padding_alg {
            Padding::Pkcs1v15 => PaddingScheme::new_pkcs1v15_sign(Some(self.hash_alg.as_hash())),
            Padding::Pss => {
                let rng = rand_core::OsRng;
                match self.hash_alg {
                    HashAlg::Sha256 => PaddingScheme::new_pss::<Sha256, _>(rng),
                    HashAlg::Sha384 => PaddingScheme::new_pss::<Sha384, _>(rng),
                    HashAlg::Sha512 => PaddingScheme::new_pss::<Sha512, _>(rng),
                }
            }
        }
    }

    fn name(&self) -> &'static str {
        match (self.padding_alg, self.hash_alg) {
            (Padding::Pkcs1v15, HashAlg::Sha256) => "RS256",
            (Padding::Pkcs1v15, HashAlg::Sha384) => "RS384",
            (Padding::Pkcs1v15, HashAlg::Sha512) => "RS512",
            (Padding::Pss, HashAlg::Sha256) => "PS256",
            (Padding::Pss, HashAlg::Sha384) => "PS384",
            (Padding::Pss, HashAlg::Sha512) => "PS512",
        }
    }

    fn sign(&self, signing_key: &RSAPrivateKey, message: &[u8]) -> RsaSignature {
        let digest = self.hash_alg.digest(message);
        RsaSignature(
            signing_key
                .sign_blinded(&mut rand_core::OsRng, self.padding_scheme(), &digest)
                .expect("Unexpected RSA signature failure"),
        )
    }

    fn verify_signature(
        &self,
        signature: &RsaSignature,
        verifying_key: &RSAPublicKey,
        message: &[u8],
    ) -> bool {
        let digest = self.hash_alg.digest(message);
        verifying_key
            .verify(self.padding_scheme(), &digest, &signature.0)
            .is_ok()
    }

    /// Generates a new key pair with the specified modulus bit length (aka key length).
    pub fn generate<R: CryptoRng + RngCore>(
        rng: &mut R,
        modulus_bits: ModulusBits,
    ) -> rsa::errors::Result<(RSAPrivateKey, RSAPublicKey)> {
        let signing_key = RSAPrivateKey::new(rng, modulus_bits.bits())?;
        let verifying_key = signing_key.to_public_key();
        Ok((signing_key, verifying_key))
    }
}
