const makeAPiCall = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This API executed in " + time);
    }, time);
  });
};
// makeAPiCall(1000).then((val) => console.log(val));

// ==============================================================
// Let assume we have to call multiple API in //^Simultaneously

let multiApiCall = [makeAPiCall(1000), makeAPiCall(2000), makeAPiCall(500)];

Promise.all(multiApiCall).then((val) => console.log({ ALL: val }));

//!  Race is going to return first promise which is being resolved
Promise.race(multiApiCall).then((val) => console.log({ RACE: val }));
