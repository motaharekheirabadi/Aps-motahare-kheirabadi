let dice1 = Math.floor(Math.random() * 6 + 1);
let dice2 = Math.floor(Math.random() * 6 + 1);
// console.log('dice1:',dice1);
// console.log('dice2:' , dice2);

let roll = `sum of ${dice1 + dice2}`;

// console.log(roll);

let num = 5
if(!num % 2 ){
    // console.log('even');
}else{
    // console.log('odd');
}



let age = prompt('what is your age? ')

let ageNum = parseInt(age)

let birthday = 1400 - ageNum

// alert(birthday);





let trafficSignal = 'go'

if(trafficSignal === 'stop'){
    // console.log('red');
}else if(trafficSignal==='slow'){
    // console.log('yellow');
}else if(trafficSignal=== 'go'){
    // console.log('green');
}else{
    // console.log('purple');
}


let password = 'moti79 9'
if(password.length>6){
    if(password.indexOf(' ')=== -1){
        console.log('your password is strong');
    }else{
        console.log('your password have empty string');
    }
}else{
    console.log('your password is not strong');
}




