const x = "1";
const y = "2";

// console.log(x, y);

/**
 * FORMATS SPECIFICATION
 *
 * %s for string
 * %i for integer
 * %d for number
 * %o for object
 */

/*
console.log("I am %s and my age is %i", "Nishanth", 22);
console.clear();

console.count("I am Nishanth");
console.count("I am Nishanth");
console.count("I am Surya");

console.countReset("I am Nishanth");
console.count("I am Nishanth");
console.count("I am Nishanth");
console.count("I am Nishanth");
console.count("I am Nishanth");

*/

const funTrace = () => console.trace();
const callTrace = () => funTrace();

// callTrace();

// Calculate the time

const sum = () => console.log(`The sum of 2 and 3 ${2 + 3}`);
const mul = () => console.log(`The mul of 2 and 3 ${2 * 3}`);

const measureTime = () => {
  console.time(`sum()`);
  sum();
  console.timeEnd(`sum()`);
  console.time(`mul()`);
  mul();
  console.timeEnd(`mul()`);
};
measureTime();
