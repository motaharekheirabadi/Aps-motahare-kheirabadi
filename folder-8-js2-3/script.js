//! 28/11/1400 

const form = document.querySelector("form");
const list = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const product = e.target.product;
  const quantity = e.target.qty;

  const li = document.createElement("li");
  li.textContent = `${product.value} : ${quantity.value}`;

  list.appendChild(li);

  product.value = "";
  quantity.value = "";
});

////////////////////////////////////////////////////////////////////////////

//?  chenge and inputEvents

const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// input.addEventListener("change", (e) => {
//   console.log("hi aps");
// });

input.addEventListener("input", (e) => {
  h1.innerText = input.value;
});
