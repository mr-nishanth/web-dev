//! 1. Error Object

const error = new Error("Something went wrong");
console.log();
// console.log(error);
console.log();
// console.log(error.stack);
console.log();
// console.log(error.message);

// throw new Error("Error from throw error object");

const { CustomError } = require("./customError");
// throw new CustomError("This is a custom error");

//! 2. Handle exceptions using try/catch block

// try {
//   doSomething();
// } catch (error) {
//   console.log("Error caught");
//   console.log(error);
// }

function doSomething() {
  const data = fetch("http://localhost:3000/api");
  console.log(`Do something`);
}

//! 3. UnCaught Exception
//  If you don't catch any exception , by default its fall in UnCaughtException
process.on("uncaughtException", (err) => {
  console.log("Uncaught exception caught", err);
  process.exit(1);
});

function doSomething() {
  //   const data = fetch("http://localhost:3000/api");
  console.log(`Do something`);
  return "Do something";
}
// doSomething();

//! 4. Exception with promise

/*
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve(doSomething());
  } else {
    reject(doSomething());
  }
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Error Occurred");
    console.log(err);
  });
*/

//! 5. Exception with Async and Await

const someFun = async () => {
  try {
    await doSomething();
  } catch (e) {
    // console.log(e.message);
    throw new CustomError(e.message);
  }
};

function doSomething() {
  const data = fetch("http://localhost:3000/api");
  //   console.log(`Do something`);
  return "Do something";
}

someFun();
