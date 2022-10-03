let firstOperand = [];
let secondOperand = [];
function increment(a){
   firstOperand.push(a);
   document.getElementById("numbers").innerHTML = firstOperand.join('') -0; //shows operand in display
}

document.getElementById("add").addEventListener("click", addition);
function addition(){
    increment(a);
    secondOperand.push(a);
   document.getElementById("numbers").innerHTML = firstOperand.join('') -0 + " +" + secondOperand.push(a);
   }



function ce(){
   firstOperand.pop();
   document.getElementById("numbers").innerHTML= firstOperand.join('') -0;
   if(firstOperand.join('') == 0){
      document.getElementById("numbers").innerHTML = "";
   }
}

function operate(a, operator, b){
   return a operator b;

}

function add(a,b){

   return a + b;
}

function subtract(a,b){
   return a - b;
}

function multiply(a,b){
   return a * b;
}

function divide(a,b){
   return a / b;
}
function solution(){
   console.log(add(firstOperand.join('') -0, 2));
}

