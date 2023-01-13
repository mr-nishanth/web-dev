/*
console.log(`Task 1`);
console.log(`Task 2`);
console.log(`Task 3`);

*/

// ? Blocking Code
//^ 👇 Synchronous code
/*
console.log("Start operation");

function sleep(milliseconds) {
  let startTime = new Date().getTime();
  console.log("Operation is running");
  while (new Date().getTime() < startTime + milliseconds) {
    console.log("Processing...");
  }
  console.log("operation is completed");
}
sleep(1000);
console.log("end operation");
*/

//^ 👇 Asynchronous code

console.log("Start operation");

function sleep(milliseconds) {
  console.log("Operation is running");
  setTimeout(() => console.log("operation is completed"), milliseconds);
}
sleep(1000);
console.log("end operation");
