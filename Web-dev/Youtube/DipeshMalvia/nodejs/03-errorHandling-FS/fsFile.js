const path = require("path");
const fs = require("fs");
// console.log(fs);

// Reading from a file
const readPath = path.join(__dirname, "files", "sample.txt");

// This is asynchronous way of reading from a file
// NOTE : "utf-8"
/*
fs.readFile(readPath, "utf-8", (err, data) => {
  if (err) {
    throw new Error("Something went wrong");
  }
  console.log(data);
  console.log(data.toString());
});
*/
// Synchronous read from a file , by default it will block in nature
try {
  const data = fs.readFileSync(readPath, "utf-8");
  console.log(data);
} catch (error) {
  console.log(error.message);
}

// 3. File system promise

const fsPromise = require("fs").promises;

const fileReading = async () => {
  try {
    const data = await fsPromise.readFile(readPath, { encoding: "utf-8" });
    console.log(`Promise: ${data}`);
  } catch (error) {
    console.log(error.message);
  }
};

fileReading();
