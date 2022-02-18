//! 28/11/1400  & 29/11/1400

// const form = document.querySelector("form");
// const list = document.querySelector("ul");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const product = e.target.product;
//   const quantity = e.target.qty;

//   const li = document.createElement("li");
//   li.textContent = `${product.value} : ${quantity.value}`;

//   list.appendChild(li);

//   product.value = "";
//   quantity.value = "";
// });

////////////////////////////////////////////////////////////////////////////

//?  chenge and inputEvents

// const input = document.querySelector("input");
// const h1 = document.querySelector("h1");

// input.addEventListener("change", (e) => {
//   console.log("hi aps");
// });

// input.addEventListener("input", (e) => {
//   h1.innerText = input.value;
// });

//////////////////////////////////////////////////////////////////
    
const h1 = document.querySelector("h1");
const input = document.querySelector("#username");

input.addEventListener("input", (e) => {
  h1.textContent = `welcome: ${e.target.value}`;
});

///////////////////////////////////////////////////////////////////////

const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

button.addEventListener("click", (e) => {
  //   e.stopPropagation();
  e.stopImmediatePropagation();
  let color = makeRandColor();
  container.style.backgroundColor = color;
  console.log(color);

  console.log("1");
});

button.addEventListener("click", (e) => {
  let color = makeRandColor();
  container.style.backgroundColor = color;
  console.log(color);
  console.log("2");
});

container.addEventListener("click", () => {
  container.classList.toggle("hide");
});

////////////////////////////////////////////////////////////

function multiply(x, y) {
  console.log("hey");
  return x * y;
}

function square(x) {
  return multiply(x, x);
}

function isRightTriangle(a, b, c) {
  return square(a) + square(b) === square(c);
}
console.log("before");

console.log(isRightTriangle(3, 4, 5));

//////////////////////////////////////////////////////////////////////










