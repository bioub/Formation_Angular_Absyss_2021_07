const { Observable } = require('rxjs');
const { take, map, filter } = require('rxjs/operators');

function interval(delay) {
  return new Observable((observer) => {
    let i = 0;
    setInterval(() => {
      observer.next(i++);
    }, delay);
  });
}

// Marble Graph
// ----0----1----2----3----4----5----6---...
// take(5)
// ----0----1----2----3----4|
// map((i) => i ** 2)
// ----0----1----4----9----16|
// filter((i) => i > 3)
// ---- ---- ----4----9----16|

interval(1000)
.pipe(
  take(5),
  map((i) => i ** 2),
  filter((i) => i > 3),
)
.subscribe((i) => {
  console.log(i);
});
