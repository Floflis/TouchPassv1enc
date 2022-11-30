// Require the core node modules.
const CryptoJS = require('crypto-js');

const myArgs = process.argv.slice(2);

let secretKey = myArgs[1]
let keyUtf8 = CryptoJS.enc.Utf8.parse(secretKey)

ENC = CryptoJS.AES.decrypt(myArgs[0], keyUtf8, { mode: CryptoJS.mode.ECB,  keySize: 128 });

ENC = CryptoJS.enc.Utf8.stringify(ENC).toString();
// credits for above: https://stackoverflow.com/a/60295551/5623661

console.log(ENC);
