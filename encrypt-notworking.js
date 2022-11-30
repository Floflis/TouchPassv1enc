// Require the core node modules.
const CryptoJS = require('crypto-js');

let secretKey = 'my secretkey 123'

let keyUtf8 = CryptoJS.enc.Utf8.parse(secretKey)

ENC = CryptoJS.AES.encrypt('MODE=UL&TYPE=V&LID=abcdef&LPW=password&AN=20022002', keyUtf8, { mode: CryptoJS.mode.ECB,  keySize: 128 });

ENC = CryptoJS.enc.Utf8.stringify(ENC).toString();

console.log(ENC);
