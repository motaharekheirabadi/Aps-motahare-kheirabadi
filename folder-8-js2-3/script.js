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
//? callback

 setTimeout(() => {
  document.body.style.backgroundColor = "red";
}, 1000);
 
setTimeout(() => {
  document.body.style.backgroundColor = "orange";
}, 2000);
 
setTimeout(() => {
  document.body.style.backgroundColor = "yellow";
}, 3000);



setTimeout(() => {
  document.body.style.backgroundColor = "red";
  setTimeout(() => {
    document.body.style.backgroundColor = "yellow";
    setTimeout(() => {
      document.body.style.backgroundColor = "green";
      setTimeout(()=>{
        document.body.style.backgroundColor = 'blue'
      } , 1000)
    }, 1000);
  }, 1000);
}, 1000);


const delayedColorChange = (newColor, delay) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
  }, delay);
};
// 
delayedColorChange("red", 2000);
delayedColorChange("olive", 4000);
delayedColorChange("khaki", 5000);




 const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext && doNext();
  }, delay);
};

delayedColorChange("red", 1000, () => {
  delayedColorChange("orange", 1000, () => {
    delayedColorChange("yellow", 1000);
  });
});

////////////////////////////////////////////////////////////////////
















