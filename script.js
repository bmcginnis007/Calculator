const numberArray = [];

function increment(a){
   numberArray.push(a);
   document.getElementById("numbers"). innerHTML = numberArray.join("");
   
}

function ce(){
   numberArray.pop();
   document.getElementById("numbers").innerHTML= numberArray.join("");
}

const num1 = 4;
const num2 = 5;
const num3 = 6;

const concat = '' + num1 + num2 + num3;
console.log(typeof concat);
console.log(concat);
const num = Number(concat);
console.log(typeof num);
console.log(num);

