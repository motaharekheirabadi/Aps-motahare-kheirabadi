//!  25/10/1400 

let dice1 = Math.floor(Math.random()*6 + 1)
let dice2 = Math.floor(Math.random()*6 + 1)

console.log('dice1:' , dice1);
console.log('dice2:' , dice2);

let roll = `you rolled a ${dice1} and a ${dice2} .they sum to a ${dice1 + dice2}`

console.log(roll);
