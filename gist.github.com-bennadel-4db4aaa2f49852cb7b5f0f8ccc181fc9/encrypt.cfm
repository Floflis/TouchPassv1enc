<cfscript>

	// I am the value that we will be encrypted and decrypting.
	input = "Get out back and hold the monkey!";

	// Generated using generateSecretKey( "AES", 128 ).
	encryptionKey = "JZidBZLaYf27huVuM4MNTA==";

	// Put the input through the encryption and decryption life-cycle using the AES
	// algorithm and the default [AES], [IVorSalt], and [iterations] values.
	// --
	// NOTE: ColdFusion uses "AES/ECB/PKCS5Padding" as the default configuration which
	// we can demonstrate by using the default configuration to encrypt and then the
	// more explicit configuration to decrypt.
	encryptedInput = encrypt( input, encryptionKey, "AES", "base64" );
	decryptedInput = decrypt( encryptedInput, encryptionKey, "AES/ECB/PKCS5Padding", "base64" );

	// Output the all the values, including an input / output test.
	writeOutput( "Input: #input# <br />" );
	writeOutput( "Encrypted Input: #encryptedInput# <br />" );
	writeOutput( "Decrypted Input: #decryptedInput# <br />" );
	writeOutput( "Values Match: #( compare( input, decryptedInput ) eq 0 )#" );

</cfscript>
