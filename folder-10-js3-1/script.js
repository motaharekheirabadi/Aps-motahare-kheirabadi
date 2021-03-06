//! 5/12/1400  && 6/12/1400

fakeRequestPromise("yelp.com/api/coffee/page1")
  .then((data) => {
    console.log("IT WORKED!!!!!! (page1)", data);
    return fakeRequestPromise("yelp.com/api/coffee/page2");
  })
  .then((data) => {
    console.log("IT WORKED!!!!!! (page2)", data);
    return fakeRequestPromise("yelp.com/api/coffee/page3");
  })
  .then((data) => {
    console.log("IT WORKED!!!!!! (page3)", data);
  })
  .catch((err) => {
    console.log("OH NO, A REQUEST FAILED!!!", err);
  });

  //////////////////////////////////////////////////////////
// 
  const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    console.log("random number is : ", rand);
    setTimeout(() => {
      if (rand < 0.1) {
        resolve(`your fake data here: ${url}`);
      }

      reject("request error");
    }, 1000);
  });
};

fakeRequest("/dogs/1")
  .then((res) => {
    console.log("done with request");
    console.log("data is : ", res);
  })
  .catch((err) => {
    console.log("OH , No!", err);
  });

  ///////////////////////////////////////////////////////////////
 
const rainbow = (colour, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = colour;
      resolve();
    }, delay);
  });
};
rainbow("red", 1000)
  .then(() => rainbow("orange", 1000))
  .then(() => rainbow("yellow", 1000))
  .then(() => rainbow("green", 1000))
  .catch((err) => console.log(err));

  //////////////////////////////////////////////////////////////////////
 const login = async (username, password) => {
  if (!username || !password) {
     throw "missing credential";
   }

   if (password === "jasem") {
     return `welcome to www.jasemKala.com dear ${username}`;
   }

   throw "invalid password";

 };


  login("benyamin", "jasem")
  .then((msg) => {
    console.log("logged in!");
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error!");
    console.log(err);
  });
//////////////////////////////////////////////////////////

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};


async function rainbow() {
  delayedColorChange("red", 1000);
  delayedColorChange("orange", 1000);
}

rainbow();


async function rainbow2() {
    await delayedColorChange("red", 1000);
  delayedColorChange("orange", 1000);
}
rainbow2();
