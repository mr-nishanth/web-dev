// npm install
// npm install <package> // npm install colors
// npm update
// npm update <package> // npm update colors

// Task runner
// npm run <command> // dev, prod

// Global or local
// -g

const _ = require("lodash");

const arr = [1, 4, 6, 8];
console.log(_.chunk(arr));
console.log(_.last(arr));

// way 1
//  npx cowsay I am Nishanth

// way 2

/*
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "Mr Black",
  })
);
*/
/*
console.log(
  cowsay.say({
    text: "Mr Black",
    e:"00",
    t:"U"
  })
);
*/

// npm view nodemon version // shows particular package version
// npm view nodemon versions // shows particular package versions available in npm repository

// Default import
const student = require("./car");
console.log(student); // { name: 'Nishanth', deg: 'MCA' }

// Named imports
const { data } = require("./car");
console.log(data);

// null and undefined both are working
console.log(JSON.stringify(data, null, 2));
console.log(JSON.stringify(data, undefined, 2));
