// Require the core node modules.
const CryptoJS = require('crypto-js');

//let secretKey = 'my secretkey 123'

//let keyUtf8 = CryptoJS.enc.Utf8.parse(secretKey)

//ENC = CryptoJS.AES.encrypt('MODE=UL&TYPE=V&LID=abcdef&LPW=password&AN=20022002', keyUtf8, { mode: CryptoJS.mode.ECB,  keySize: 128 });

//ENC = CryptoJS.enc.Utf8.stringify(ENC).toString();

//console.log(ENC);



// Encrypt
var secretKey = 'my secretkey 123'
var keyUtf8 = CryptoJS.enc.Utf8.parse(secretKey)

var ciphertext = CryptoJS.AES.encrypt('MODE=UL&TYPE=V&LID=abcdef&LPW=password&AN=20022002', keyUtf8, { mode: CryptoJS.mode.ECB,  keySize: 128 }).toString();

// Decrypt
//var bytes  = CryptoJS.AES.decrypt(ciphertext, 'my secretkey 123', { mode: CryptoJS.mode.ECB,  keySize: 128 });
//var originalText = bytes.toString(CryptoJS.enc.Utf8);

//console.log(bytes);
console.log(ciphertext);
//console.log(originalText); // 'my message'
// credits for above: https://www.npmjs.com/package/crypto-js. it has been modified by daniella
