/* process.stdout.write("Hello, World");
process.stdout.clearLine(0);
process.stdout.cursorTo(0);
process.stdout.write("Hello, World!");
process.stdout.write("\n"); */
const fs = require('fs');
let data = fs.readFileSync("count.txt", { encoding:"utf-8", }).split("\n")
.slice(0,2650000);
for (let index = 0; index < data.length; index++) {
    const dat = data[index];
    data[index] = dat.split(" ").slice(-1);
}
fs.writeFileSync("wordlist2.txt", data.join("\n")+"\n");