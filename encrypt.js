// Require the core node modules.
const CryptoJS = require('crypto-js');

const myArgs = process.argv.slice(2);

let secretKey = myArgs[1]
let keyUtf8 = CryptoJS.enc.Utf8.parse(secretKey)

let ciphertext = CryptoJS.AES.encrypt(myArgs[0], keyUtf8, { mode: CryptoJS.mode.ECB,  keySize: 128 }).toString();

console.log(ciphertext);
