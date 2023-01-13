//NOTE: Callback function is synchronous in nature

/*
console.log("Task Started");
function asyncTask(cb) {
  console.log("Task in progress");
  cb();
}
asyncTask(() => console.log("Nishanth"));
console.log("Task Completed");
const name = "Nishanth";
*/
/*
 *Task Started
 *Task in progress
 *Nishanth
 *Task Completed
 */

//  -----------------------------------------

/*
console.log("Task Started");
function asyncTask(cb) {
  console.log("Task in progress");
  cb();
}
asyncTask(() => console.log(name));
console.log("Task Completed");
const name = "Nishanth";
*/
/*
 * ReferenceError: Cannot access 'name' before initialization
 * Its throw error we know callback themselves is not asynchronous
 * Completed JS files compile first , variables are allocated to memory, then our callback function is called
 */

// ==========================
// Convert callback synchronous to asynchronous using setTimeout
/*
console.log("Task Started");
function asyncTask(cb) {
  console.log("Task in progress");
  setTimeout(cb, 0);
}
asyncTask(() => console.log(name));
console.log("Task Completed");
const name = "Nishanth";
*/
/*
 *Task Started
 *Task in progress
 *Task Completed
 *Nishanth

 Callback function taking out from execution context flow , then completed JS file complied and all the variable allocated to memory  and then callback function is executed/called
 ^ It is one of the way to convert callback synchronous to asynchronous 
 */

//  ====================================================
// ! Good way to handle error in callback

console.log("Task Started");
function asyncTask(cb) {
  console.log("Task in progress");

  setTimeout(() => {
    // If error occurs
    // cb("Error"); // its throw error
    // If no error occurs
    cb(null, "I Love JavaScript");
  }, 0);
}

// error first callback
asyncTask((err, data) => {
  if (err) {
    throw err;
  } else {
    console.log("Data :", data);
  }
});
const name = "Nishanth";
console.log("Task Completed");

/*
 * Task Started
 * Task in progress
 * Task Completed
 * Data  I Love JavaScrip
 */

//! Callback hell
