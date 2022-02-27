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
