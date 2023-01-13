/*
const promise = new Promise((resolve, reject) => {
  console.log("Async task execution");

  //   if (true) {
  //     resolve();
  //   } else {
  //     reject();
  //   }

  //   if (false) {
  //     resolve();
  //   } else {
  //     reject();
  //   }

  if (true) {
    const person = { name: "Nishanth" };
    resolve(person);
  } else {
    const error = { error: "Something went wrong" };
    reject();
  }
});
*/
/*
promise.then(
  // If the resolve function is called below, function will be called
  () => {
    console.log("Passed");
  },
  // If the reject function is called below, function will be called
  () => {
    console.log("Failed");
  }
);
*/

/*
promise.then(
  // If the resolve function is called below, function will be called
  (val) => {
    console.log(val);
  },
  // If the reject function is called below, function will be called
  (err) => {
    console.log(err);
  }
);

*/
// handle promise in separate then and catch

/*
const promise = new Promise((resolve, reject) => {
  console.log("Async task execution");

  //   Another way throw a error
  // By nature of throw , its called reject function
  throw "err";
  //   Its automatically catch
  if (true) {
    //   if (false) {
    const person = { name: "Nishanth" };
    resolve(person);
  } else {
    const error = { error: "Something went wrong" };
    reject(error);
  }
});

promise
  .then((val) => console.log(val))
  .catch((err) => console.log(err))
  .finally(() => console.log("Cleanup completed"));

  */

//   ======================================================

// There may be a case that you have a promise which is being already resolved and now you want to interact with it.

/*
let rs = Promise.resolve("Execution is done");
rs.then((val) => console.log(val));
let rj = Promise.reject("Execution is rejected");
rj.catch((err) => console.log(err));
*/
//! NOTE
/*
 * By default the promise is asynchronous in nature
 * By default the callback is synchronous in nature
 *      use setTimeout function to convert synchronous to asynchronous for callback
 */

//^ Callback
// function asyncTask(cb) {
//   cb();
// }
// asyncTask(() => console.log(name));
// const name = "Nishanth";
// ReferenceError: Cannot access 'name' before initialization

//^ Promise
function asyncTask() {
  return Promise.resolve();
}
asyncTask().then(() => console.log(name));
const name = "Nishanth";

// Chaining in promises
// NOTE: You always has to return something else it break the chain
// const p = Promise.resolve("DONE 1");
// p.then((val) => {
//   console.log(val);
//   return "DONE 2";
// })
//   .then((val) => {
//     console.log(val);
//     return "DONE 3";
//   })
//   .then((val) => {
//     console.log(val);
//   });

const r = Promise.reject("Failed");
r.then((val) => {
  console.log(val);
  return "DONE 2";
})
  .then((val) => {
    console.log(val);
    return "DONE 3";
  })
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });
