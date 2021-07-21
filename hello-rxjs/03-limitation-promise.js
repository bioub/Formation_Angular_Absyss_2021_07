// function timeout(delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, delay);
//   });
// }

// timeout(1000).then(() => {
//   console.log("1s");
// });

function interval(delay) {
  return new Promise((resolve) => {
    setInterval(() => {
      resolve();
    }, delay);
  });
}

interval(1000).then(() => {
  console.log("1s");
});
