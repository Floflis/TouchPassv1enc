// Require the core node modules.
var crypto = require( "crypto" );


// I am the value that we will be encrypted and decrypting.
var input = "Get out back and hold the monkey!";

// In Node, we need to use the same AES secret key that we generated and used in
// our ColdFusion encryption algorithm.
// --
// Generated using generateSecretKey( "AES", 128 ).
var encryptionKey = "JZidBZLaYf27huVuM4MNTA==";

// I am the encrypted input value as generated by ColdFusion's encrypt() method.
// --
// NOTE: encrypt( input, encryptionKey, "AES", "base64" );
var coldfusionEncryptedValue = "TmiHZg7CvY+92iNxzp+nR6gX9ynpKmc5t6ZP1sZLU5UzCAN601RDfyOuGu3fq8jh";


// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //


// The CipherIV methods must take the inputs as a binary / buffer values.
var binaryEncryptionKey = new Buffer( encryptionKey, "base64" );
var binaryIV = new Buffer( 0 );

// It was the use of an empty IVorSalt value that really blocked us for a while in
// getting this to work. The biggest challenge when performing cryptography across
// different technologies is marking sure that the algorithms line-up exactly otherwise
// the values won't be correct. In ColdFusion, we didn't provide an initialization
// vector; as such, in Node, we have to do the same thing by EXPLICITLY providing an
// EMPTY IV value.
// --
// NOTE: If we had used the crypto.createCipher() method instead, the IV value would
// have been derived from the encryption key, which is definitely not what we wanted.
var cipher = crypto.createCipheriv( "AES-128-ECB", binaryEncryptionKey, binaryIV );

// When encrypting, we're converting the UTF-8 input to Base64 output.
var encryptedInput = (
	cipher.update( input, "utf8", "base64" ) +
	cipher.final( "base64" )
);


// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //


var decipher = crypto.createDecipheriv( "AES-128-ECB", binaryEncryptionKey, binaryIV );

// When decrypting we're converting the Base64 input to UTF-8 output.
var decryptedInput = (
	decipher.update( encryptedInput, "base64", "utf8" ) +
	decipher.final( "utf8" )
);


// Output the all the values, including an input / output test for ColdFusion and
// Node.js to see if the encrypted values match.
console.log( "Input:", input );
console.log( "Encrypted Input:", encryptedInput );
console.log( "Decrypted Input:", decryptedInput );
console.log( "Values Match:", ( input === decryptedInput ) );
console.log( "ColdFusion / Node Match:", ( coldfusionEncryptedValue === encryptedInput ) );