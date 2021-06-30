(function() {var implementors = {};
implementors["jwt_compact"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/alg/struct.SecretBytes.html\" title=\"struct jwt_compact::alg::SecretBytes\">SecretBytes</a>&lt;'a&gt;","synthetic":true,"types":["jwt_compact::alg::generic::SecretBytes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/alg/struct.Hs256Signature.html\" title=\"struct jwt_compact::alg::Hs256Signature\">Hs256Signature</a>","synthetic":true,"types":["jwt_compact::alg::hmacs::Hs256Signature"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/alg/struct.Hs384Signature.html\" title=\"struct jwt_compact::alg::Hs384Signature\">Hs384Signature</a>","synthetic":true,"types":["jwt_compact::alg::hmacs::Hs384Signature"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/alg/struct.Hs512Signature.html\" title=\"struct jwt_compact::alg::Hs512Signature\">Hs512Signature</a>","synthetic":true,"types":["jwt_compact::alg::hmacs::Hs512Signature"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/alg/struct.Hs256Key.html\" title=\"struct jwt_compact::alg::Hs256Key\">Hs256Key</a>","synthetic":true,"types":["jwt_compact::alg::hmacs::Hs256Key"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/alg/struct.Hs384Key.html\" title=\"struct jwt_compact::alg::Hs384Key\">Hs384Key</a>","synthetic":true,"types":["jwt_compact::alg::hmacs::Hs384Key"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/alg/struct.Hs512Key.html\" title=\"struct jwt_compact::alg::Hs512Key\">Hs512Key</a>","synthetic":true,"types":["jwt_compact::alg::hmacs::Hs512Key"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/alg/struct.Hs256.html\" title=\"struct jwt_compact::alg::Hs256\">Hs256</a>","synthetic":true,"types":["jwt_compact::alg::hmacs::Hs256"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/alg/struct.Hs384.html\" title=\"struct jwt_compact::alg::Hs384\">Hs384</a>","synthetic":true,"types":["jwt_compact::alg::hmacs::Hs384"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/alg/struct.Hs512.html\" title=\"struct jwt_compact::alg::Hs512\">Hs512</a>","synthetic":true,"types":["jwt_compact::alg::hmacs::Hs512"]},{"text":"impl&lt;D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/alg/struct.Es256k.html\" title=\"struct jwt_compact::alg::Es256k\">Es256k</a>&lt;D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["jwt_compact::alg::es256k::Es256k"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/alg/struct.Ed25519.html\" title=\"struct jwt_compact::alg::Ed25519\">Ed25519</a>","synthetic":true,"types":["jwt_compact::alg::eddsa_sodium::Ed25519"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/alg/struct.RsaSignature.html\" title=\"struct jwt_compact::alg::RsaSignature\">RsaSignature</a>","synthetic":true,"types":["jwt_compact::alg::rsa::RsaSignature"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"jwt_compact/alg/enum.ModulusBits.html\" title=\"enum jwt_compact::alg::ModulusBits\">ModulusBits</a>","synthetic":true,"types":["jwt_compact::alg::rsa::ModulusBits"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/alg/struct.ModulusBitsError.html\" title=\"struct jwt_compact::alg::ModulusBitsError\">ModulusBitsError</a>","synthetic":true,"types":["jwt_compact::alg::rsa::ModulusBitsError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/alg/struct.Rsa.html\" title=\"struct jwt_compact::alg::Rsa\">Rsa</a>","synthetic":true,"types":["jwt_compact::alg::rsa::Rsa"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/alg/struct.StrongKey.html\" title=\"struct jwt_compact::alg::StrongKey\">StrongKey</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["jwt_compact::alg::StrongKey"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/alg/struct.WeakKeyError.html\" title=\"struct jwt_compact::alg::WeakKeyError\">WeakKeyError</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["jwt_compact::alg::WeakKeyError"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/alg/struct.StrongAlg.html\" title=\"struct jwt_compact::alg::StrongAlg\">StrongAlg</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["jwt_compact::alg::StrongAlg"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/prelude/struct.TimeOptions.html\" title=\"struct jwt_compact::prelude::TimeOptions\">TimeOptions</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["jwt_compact::claims::TimeOptions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/struct.Empty.html\" title=\"struct jwt_compact::Empty\">Empty</a>","synthetic":true,"types":["jwt_compact::claims::Empty"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/prelude/struct.Claims.html\" title=\"struct jwt_compact::prelude::Claims\">Claims</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["jwt_compact::claims::Claims"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"jwt_compact/enum.ParseError.html\" title=\"enum jwt_compact::ParseError\">ParseError</a>","synthetic":true,"types":["jwt_compact::error::ParseError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"jwt_compact/enum.ValidationError.html\" title=\"enum jwt_compact::ValidationError\">ValidationError</a>","synthetic":true,"types":["jwt_compact::error::ValidationError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"jwt_compact/enum.Claim.html\" title=\"enum jwt_compact::Claim\">Claim</a>","synthetic":true,"types":["jwt_compact::error::Claim"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"jwt_compact/enum.CreationError.html\" title=\"enum jwt_compact::CreationError\">CreationError</a>","synthetic":true,"types":["jwt_compact::error::CreationError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"jwt_compact/jwk/enum.KeyType.html\" title=\"enum jwt_compact::jwk::KeyType\">KeyType</a>","synthetic":true,"types":["jwt_compact::jwk::KeyType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"jwt_compact/jwk/enum.JwkError.html\" title=\"enum jwt_compact::jwk::JwkError\">JwkError</a>","synthetic":true,"types":["jwt_compact::jwk::JwkError"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"jwt_compact/jwk/enum.JsonWebKey.html\" title=\"enum jwt_compact::jwk::JsonWebKey\">JsonWebKey</a>&lt;'a&gt;","synthetic":true,"types":["jwt_compact::jwk::JsonWebKey"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/jwk/struct.RsaPrivateParts.html\" title=\"struct jwt_compact::jwk::RsaPrivateParts\">RsaPrivateParts</a>&lt;'a&gt;","synthetic":true,"types":["jwt_compact::jwk::RsaPrivateParts"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/jwk/struct.RsaPrimeFactor.html\" title=\"struct jwt_compact::jwk::RsaPrimeFactor\">RsaPrimeFactor</a>&lt;'a&gt;","synthetic":true,"types":["jwt_compact::jwk::RsaPrimeFactor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/prelude/struct.Header.html\" title=\"struct jwt_compact::prelude::Header\">Header</a>","synthetic":true,"types":["jwt_compact::token::Header"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/prelude/struct.UntrustedToken.html\" title=\"struct jwt_compact::prelude::UntrustedToken\">UntrustedToken</a>&lt;'a&gt;","synthetic":true,"types":["jwt_compact::token::UntrustedToken"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/prelude/struct.Token.html\" title=\"struct jwt_compact::prelude::Token\">Token</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["jwt_compact::token::Token"]},{"text":"impl&lt;A:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/struct.SignedToken.html\" title=\"struct jwt_compact::SignedToken\">SignedToken</a>&lt;A, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A as <a class=\"trait\" href=\"jwt_compact/trait.Algorithm.html\" title=\"trait jwt_compact::Algorithm\">Algorithm</a>&gt;::<a class=\"type\" href=\"jwt_compact/trait.Algorithm.html#associatedtype.Signature\" title=\"type jwt_compact::Algorithm::Signature\">Signature</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["jwt_compact::token::SignedToken"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"jwt_compact/struct.Renamed.html\" title=\"struct jwt_compact::Renamed\">Renamed</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["jwt_compact::traits::Renamed"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()