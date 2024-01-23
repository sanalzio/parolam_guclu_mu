/* process.stdout.write("Hello, World");
process.stdout.clearLine(0);
process.stdout.cursorTo(0);
process.stdout.write("Hello, World!");
process.stdout.write("\n"); */
const fs = require('fs');
let data = fs.readFileSync("wordlist.txt", { encoding:"utf-8", }).split("\n");
console.log(data.slice(-1));