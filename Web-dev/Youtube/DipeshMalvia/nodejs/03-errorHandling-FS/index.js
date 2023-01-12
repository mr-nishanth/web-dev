const path = require("path");

const filePath =
  "C:VSCodeWeb-devYoutubeDipeshMalvia\nodejs\03-errorHandling-FS\filessample.txt";

// directory name
console.log(`Dirname :=> ${path.dirname(filePath)}`);
//  basename
console.log(`Basename :=> ${path.basename(filePath)}`);
// extension
console.log(`Extension :=> ${path.extname(filePath)}`);

// Globally available objects
console.log(__dirname);
console.log(__filename);

const samplePath = "sample.txt";
console.log(path.join(path.dirname(filePath), samplePath));
