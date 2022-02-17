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
