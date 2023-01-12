const readLine = require("readline");

// prompt-sync is function
const prompt = require("prompt-sync")();
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Without prompt-sync
/*
rl.question(`What is your name ? `, (name) => {
  console.log(`Welcome to ${name}`);
  rl.close();
});
*/

const ans = prompt("Are you Web developer ?");
console.log(ans);
