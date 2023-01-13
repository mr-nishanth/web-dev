// ^ Without Async Await
/*
const userLogin = () => {
  console.log("Enter Username and Password");
  let username = prompt("Enter username : ");
  let password = prompt("Enter password : ");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Performing User Authentication");
      if (username === "admin" && password === "admin")
        resolve("User Authentication");
      else reject("User Authentication Failed");
    }, 1000);
  });
};

function goToHomePage(userAuthStatus) {
  return Promise.resolve(`Go to Home Page as : ${userAuthStatus}`);
}

userLogin()
  .then((res) => {
    console.log("Validated User Login");
    return goToHomePage(res);
  })
  .then((userAuthStatus) => {
    console.log(userAuthStatus);
  })
  .catch((err) => console.log(err));
*/

// ^ With Async Await

const userLogin = () => {
  console.log("Enter Username and Password");
  let username = prompt("Enter username : ");
  let password = prompt("Enter password : ");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Performing User Authentication");
      if (username === "admin" && password === "admin")
        resolve("User Authentication");
      else reject("User Authentication Failed");
    }, 1000);
  });
};

function goToHomePage(userAuthStatus) {
  return Promise.resolve(`Go to Home Page as : ${userAuthStatus}`);
}

// Self invoking function
// (async function performTask() {
//   try {
//     const res = await userLogin();
//     console.log("Validated User Login");
//     const userAuthStatus = await goToHomePage(res);
//     console.log(userAuthStatus);
//   } catch (error) {
//     console.log(error);
//   }
// })();

async function performTask() {
  try {
    const res = await userLogin();
    console.log("Validated User Login");
    const userAuthStatus = await goToHomePage(res);
    console.log(userAuthStatus);
  } catch (error) {
    console.log(error);
  }
}
//performTask()
