//! 25/11/1400
//* js2-3 - review

const hello = document.querySelector("#hello");
hello.addEventListener("click", () => console.log("hello"));

document
  .querySelector("#goodbye")
  .addEventListener("click", () => console.log("goodbye"));

  /////////////////////////////////////////////////////////////////////

  const button = document.querySelector("button");
  const h1 = document.querySelector("h1");
  const p = document.createElement("p");

  h1.append(p);


  button.addEventListener("click", () => {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    p.innerText = newColor;
  });

  const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r} , ${g} , ${b})`;
  };

///////////////////////////////////////////////////////////////////////////

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
// 
  return `rgb(${r} , ${g} , ${b})`;
};
// 
const buttons = document.querySelectorAll("button");
// 
for (let button of buttons) {
  button.addEventListener("click", function () {
    console.log(this);
// 
    // 
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
  });
}