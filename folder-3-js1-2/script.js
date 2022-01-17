//! 26/10/1400

let jasem = " moti ";
// console.log(jasem.toUpperCase());

let num = "moti kheir"
// console.log(num.trim());
// console.log(num.slice(3));
// console.log(num.replace("moti" , "motahare"));

const date = new Date()
// console.log(date.getday());

let myFirstArray =[ 'moti', 'mohammad' , 'arad']

// console.log(myFirstArray[0]);
// console.log(myFirstArray.length);

const array1 = [1 , 30 ,4 , 21 , 10000 ,35 ,68 , 63 ,40]

array1.sort()
// console.log(array1);

function sum(num1 , num2){
    const sumNum = num1 + num2
    // console.log(`sum of num1 and num 2 :${sumNum}`);
}
sum(5 , 4)

function makeheart(){
    // console.log('<3');
}
makeheart();

function greeting(firstName , lastName , age ,role , ideas){
    // console.log(firstName , lastName , age ,role , ideas)
}

greeting('moti' , 'kheirabadi' , 21 , 'student' , 'love aps')


function random(){
    return Math.round(Math.random()*100)
    
}
