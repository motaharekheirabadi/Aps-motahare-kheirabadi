//! 7/12/1400

const toJson = JSON.parse(apiToGet);
console.log(toJson);
const apiPrice = toJson.ticker.price;
console.log(apiPrice);

const apiToPost = {
  ticker: {
    base: "BTC",
    target: "USD",
    price: "38280.58063610",
    volume: "97811.05442583",
    change: "-202.19261818",
  },
  timestamp: 1621704005,
  success: true,
  error: "",
};

const toApiFormat = JSON.stringify(apiToPost);
console.log(toApiFormat);

/////////////////////////////////////////////////////////////////////

const req = new XMLHttpRequest();

req.onload = function () {
  console.log("ALL DONE WITH REQUEST!!!");
  console.log(req);
  const data = JSON.parse(req.responseText);
  console.log(data);
};

req.onerror = function () {
  console.log("ERROR!!!");
  console.log(req);
};

req.open("GET", "https://jsonplaceholder.typicode.com/todos/");
req.send();

///////////////////////////////////////////////////////////////////////////

const fetchUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await res.json();
    console.log(data);
  } catch (jasemError) {
    console.log("something went wrong", jasemError);
  }
};

fetchUsers();


 fetch("https://apitester.ir/api/Categories")
  .then((data) => data.json())
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  console.log(res);
  const data = await res.json();
  return data;
};

fetchUsers()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));




