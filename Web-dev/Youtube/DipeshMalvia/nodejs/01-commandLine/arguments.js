// node .\01-commandLine\arguments.js <NAME>=<VALUE>

const minimist = require("minimist");

// process.argv;

// C:\Program Files\nodejs\node.exe,
// C:\VSCode\Web-dev\Youtube\DipeshMalvia\nodejs\01-commandLine\arguments.js
// ARGUMENTS

/*
console.log(`\n ${process.argv.slice(2)[0]}`);

process.argv.forEach((val, ix) => {
  console.log(`${ix} = ${val}`);
});

*/

// const argNew = process.argv.slice(2)[0];
const argNew = minimist(process.argv.slice(2));
console.log();
// console.log(argNew);

//  node .\01-commandLine\arguments.js --NAME=Nishanth
// NOTE: If you are using minimist the key argument must be prefixed with with -- (double underscore)
console.log(argNew.NAME);
