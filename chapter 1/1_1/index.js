/**
 * First version is to simply write to a file
 */

import { writeFileSync } from "fs";
// Alternatively, you can use the older syntax: the dynamic import
// using 'require()'. That's the only one that works with in REPL mode:
//writeFileSync = require("fs").writeFileSync;

const content = "Test content!";

try {
  writeFileSync("./test.txt", content);
  console.log("Success!");
} catch (err) {
  console.error(err);
}
