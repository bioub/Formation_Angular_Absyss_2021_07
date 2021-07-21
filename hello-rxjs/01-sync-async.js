const fs = require("fs");

// Synchrone (fonction bloquante)
const content = fs.readFileSync("package.json", { encoding: "utf-8" });
console.log(content);

// Asynchrone (plus performante)
fs.readFile("package.json", { encoding: "utf-8" }, (err, content) => {
  console.log(content);
});
