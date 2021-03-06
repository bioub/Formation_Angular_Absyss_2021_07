const { Observable } = require('rxjs');

function interval(delay) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, delay);
  });
}

interval(1000).subscribe(() => {
  console.log("1s");
});
