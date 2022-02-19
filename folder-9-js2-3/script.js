//! 30/11/1400


//? promise

const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  console.log(delay);

  setTimeout(() => {
    if (delay < 3000) {
      success(`here is your fake data from ${url}`);
    } else {
      failure("connection timeout :( ");
    }
  }, delay);
};



fakeRequestCallback(
  "jasem.com/page1",
  function success(response) {
    console.log("it worked page 1");
    console.log(response);

    fakeRequestCallback(
      "jasem.com/page2",
      function success(response) {
        console.log("it worked page 2");
        console.log(response);

        fakeRequestCallback(
          "jasem.com/page3",
          function success(response) {
            console.log("it worked page 3");
            console.log(response);
          },
          function failure(error) {
            console.log("error in page 3");
            console.log(error);
          }
        );
      },
      function failure(error) {
        console.log("error in page 2");
        console.log(error);
      }
    );
  },
  function failure(error) {
    console.log("error in page 1");
    console.log(error);
  }
);


const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    console.log(delay);

    setTimeout(() => {
      if (delay < 3000) {
        resolve(`here is your fake data from ${url}`);
      } else {
        reject("connection timeout :( ");
      }
    }, delay);
  });
};
