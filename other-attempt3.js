// Require the core node modules.
const CryptoJS = require('crypto-js');

let keyUtf8 = CryptoJS.enc.Utf8.parse(secretKey)

ENC = CryptoJS.AES.decrypt(ENC, keyUtf8, { mode: CryptoJS.mode.ECB,  keySize: 128 });

ENC = CryptoJS.enc.Utf8.stringify(ENC).toString();
