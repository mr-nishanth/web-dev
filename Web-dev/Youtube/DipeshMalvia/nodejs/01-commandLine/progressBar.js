const ProgressBar = require("progress");
const chalk = require("chalk");

// Chalk <= 4 using commonjs
// Chalk >= 5 using ES module
const bar = new ProgressBar(
  chalk.green("Downloading [:bar] :rate/bps :percent :etas"),
  {
    total: 20,
  }
);

const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);

// console.log(chalk.green())
