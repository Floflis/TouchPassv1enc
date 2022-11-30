// Require the core node modules.
const CryptoJS = require('crypto-js');

let secretKey = 'my secretkey 123'
let keyUtf8 = CryptoJS.enc.Utf8.parse(secretKey)

let ciphertext = CryptoJS.AES.encrypt('MODE=UL&TYPE=V&LID=abcdef&LPW=password&AN=20022002', keyUtf8, { mode: CryptoJS.mode.ECB,  keySize: 128 }).toString();

console.log(ciphertext);
