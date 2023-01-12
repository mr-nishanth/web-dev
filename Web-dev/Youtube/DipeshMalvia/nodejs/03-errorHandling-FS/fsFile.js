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

// ===========================================
//  Writing/reading into a file [without fs-promise]
const writePath = path.join(__dirname, "files", "text.txt");
/*
const writePath = path.join(__dirname, "files", "text.txt");
console.log(writePath);
const content = "I love JavaScript";
fs.writeFile(writePath, content, (err) => {
  if (err) {
    throw new Error("Error in writing file");
  }
  console.log("\n Write operation successful");

  // read the file
  fs.readFile(writePath, "utf-8", (err, content) => {
    if (err) {
      throw new Error("Error in reading file");
    }
    console.log(content);
  });
});
*/

// ===========================================
//  Writing/reading into a file [fs-promise]
const writingInFile = async (content) => {
  try {
    await fsPromise.writeFile(writePath, content);

    // Seems like appended
    await fsPromise.writeFile(
      writePath,
      "\n Position of the head at the last of the content",
      { flag: "a+" }
    );
    // Append the file
    // await fsPromise.appendFile(writePath, "\n This is file appended");

    // Rename the file
    await fsPromise.rename(
      writePath,
      path.join(__dirname, "files", "newText.txt")
    );

    // const data = await fsPromise.readFile(writePath, "utf-8");
    const data = await fsPromise.readFile(
      path.join(__dirname, "files", "newText.txt"),
      "utf-8"
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
writingInFile("I Love Promise");
