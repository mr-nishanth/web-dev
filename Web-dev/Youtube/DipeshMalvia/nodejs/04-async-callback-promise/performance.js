// Performance Promise vs Async Await

const makeApiCall = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This API executed in " + time);
    }, time);
  });
};

let multiApiCall = [makeApiCall(1000), makeApiCall(2000), makeApiCall(500)];
// Promise.all(multiApiCall).then((val) => console.log({ ALL: val }));

// --------------
// Convert Async Await
const asyncAwaitVersion = (time) => {
  // return the function instead of promise
  return () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("This API executed in " + time);
      }, time);
    });
};

let asyncAwait = [
  asyncAwaitVersion(1000),
  asyncAwaitVersion(2000),
  asyncAwaitVersion(500),
];

(async function () {
  for (let request of asyncAwait) {
    console.log(await request());
  }
})();

// Consultation
// ^ Async Await the API request are not run simultaneously  (one by one)
// !        In this case Async Await lake the performance
// ^ In Promise the API request are run simultaneously
