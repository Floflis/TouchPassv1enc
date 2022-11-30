// Require the core node modules.
const CryptoJS = require('crypto-js');

let secretKey = 'my secretkey 123'
let keyUtf8 = CryptoJS.enc.Utf8.parse(secretKey)

ENC = CryptoJS.AES.decrypt('HcMV322sPPrFonlvXZ5pvFpXABVrxYVAXrEr9vcu7TIFOPNQVGq5svEv3959sRDxkDHB/nav80iGMPBiz8bDeA==', keyUtf8, { mode: CryptoJS.mode.ECB,  keySize: 128 });

ENC = CryptoJS.enc.Utf8.stringify(ENC).toString();
// credits for above: https://stackoverflow.com/a/60295551/5623661

console.log(ENC);
