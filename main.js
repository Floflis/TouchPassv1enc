const myArgs = process.argv.slice(2);
//console.log('myArgs: ', myArgs);

const { exec } = require("child_process");
switch (myArgs[0]) {
  case 'encrypt':
    execontent = 'node js/encrypt.js' + " '" + myArgs[1] + "' '" + myArgs[2] + "'"
    exec(execontent, (error, stdout, stderr) => {if (error){console.log(`error: ${error.message}`);return;}if (stderr){console.log(`stderr: ${stderr}`);return;}console.log(stdout);});
    break;
  case 'decrypt':
    execontent = 'node js/decrypt.js' + " '" + myArgs[1] + "' '" + myArgs[2] + "'"
    exec(execontent, (error, stdout, stderr) => {if (error){console.log(`error: ${error.message}`);return;}if (stderr){console.log(`stderr: ${stderr}`);return;}console.log(stdout);});
    break;
  default:
    console.log('Unknown command.');
}
// credits for above: https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
