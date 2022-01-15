//!  25/10/1400 

let dice1 = Math.floor(Math.random()*6 + 1)
let dice2 = Math.floor(Math.random()*6 + 1)

// console.log('dice1:' , dice1);
// console.log('dice2:' , dice2);

let roll = `you rolled a ${dice1} and a ${dice2} .they sum to a ${dice1 + dice2}`

// console.log(roll);

// alert('welcome ')

// let num = prompt('what is your name?')

// console.log(num);

let input = prompt("what is your age ?")
let age = parseInt(input)

let birthday = 1400 - age 

alert (`your birthday is ${birthday}`)

// console.log(birthday);

let num = "10"
// console.log(parseInt(num));
// console.log(num + 10)

let password = "aradha ssanpour";

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    // console.log("your password is strong");
  } else {
    // console.log("your password contains empty string ");
  }
} else {
//   console.log("your password is not");
}

let myFirstArray = [123 , 'arad' , NaN  , 'motahareh' , null , 'jasem' , '']

// console.log(myFirstArray)


let str = 'benyamin'
// console.log(str[1])


str[0] = 'z' //impossible
// console.log(str)


// console.log(myFirstArray)
myFirstArray[0] = 'khashayar'
// console.log(myFirstArray)


let colors = ['red' , 'orange' , 'yellow']

// console.log(colors[1])
// colors[100] = 'purple'

// console.log(colors)

// console.log(colors[90])

//you can have an array of numbers

let nums = [654,145,3514,53,351,35,1]

// console.log(nums)

let board = ["Harry", "Lua", "Hermione", "Ballatrix"]; 



// board[1] = board[1].replace('a' , 'na')

board[1] = "Luna"; 
board[3] = "Draco";

console.log(board);

let students = ["mohammadhossein", "ali", "manochehr", "anahid", "zahra"];

console.log(students);

students.push("mahdie", "motahareh");
console.log(students);

students.pop();
console.log(students);

students.shift();
console.log(students);

students.unshift("amir");
console.log(students);










