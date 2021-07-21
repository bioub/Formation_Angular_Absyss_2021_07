const fs = require("fs");

// Synchrone (fonction bloquante)
try {
  const content = fs.readFileSync("package.json", { encoding: "utf-8" });
  fs.writeFileSync("package.json.copy", content);
  console.log("COPY DONE");
} catch (err) {
  console.log(err);
}

// Callback Hell / Pyramid of doom
fs.readFile("package.json", { encoding: "utf-8" }, (err, content) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile("package.json.copy", content, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("COPY DONE");
      }
    });
  }
});

// Pour résoudre le problème
// des libs comme async
// des libs de Promise (q, bluebird) / Future / Defer (jQuery)
// Promise a été normé en ES2015

fs.promises
  .readFile("package.json", { encoding: "utf-8" })
  .then((content) => {
    return fs.writeFile("package.json.copy", content);
  })
  .then(() => {
    console.log("COPY DONE");
  })
  .catch((err) => {
    console.log(err);
  });
