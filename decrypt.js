// Require the core node modules.
const CryptoJS = require('crypto-js');

let secretKey = 'my secretkey 123'
//let enc = 'HcMV322sPPrFonlvXZ5pvFpXABVrxYVAXrEr9vcu7TIFOPNQVGq5svEv3959sRDxkDHB/nav80iGMPBiz8bDeA=='

let keyUtf8 = CryptoJS.enc.Utf8.parse(secretKey)

ENC = CryptoJS.AES.decrypt('HcMV322sPPrFonlvXZ5pvFpXABVrxYVAXrEr9vcu7TIFOPNQVGq5svEv3959sRDxkDHB/nav80iGMPBiz8bDeA==', keyUtf8, { mode: CryptoJS.mode.ECB,  keySize: 128 });

ENC = CryptoJS.enc.Utf8.stringify(ENC).toString();
// credits for above: https://stackoverflow.com/a/60295551/5623661

//console.log(ENC, '--->');
console.log(ENC);





//const CryptoJS = require('crypto-js');

//var bytes  = CryptoJS.AES.decrypt('HcMV322sPPrFonlvXZ5pvFpXABVrxYVAXrEr9vcu7TIFOPNQVGq5svEv3959sRDxkDHB/nav80iGMPBiz8bDeA==', 'my secretkey 123');

//var originalText = bytes.toString(CryptoJS.enc.Utf8);

//console.log(originalText, '--->');
// credits for above: https://stackoverflow.com/questions/60295154/aes-128-ecb-decryption-nodejs
