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
