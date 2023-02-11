/*let firstOperand = "";
let operation = "";
let secondOperand = "";
const operands = [firstOperand,secondOperand];
let buttons = document.querySelectorAll("button[id='num']");
for (let i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener("click", function() {
      operands[0] += this.value;
      operands[0] = parseFloat(operands[0]);
      document.getElementById("numbers").innerHTML = operands[0];
      console.log(operands[0]);
      console.log(typeof operands[0]);
   });
}

function clearEntry(){
   operands[0] = operands[0].toString();
   operands[0] = operands[0].slice(0, -1);
   operands[0] = parseFloat(operands[0]);
   if(isNaN(operands[0])){
      operands[0] = 0;
   }
   document.getElementById("numbers").innerHTML = operands[0];
   console.log(operands[0]);
   console.log(typeof operands[0]);
}

function allClear(){
 operands[0] = 0;
 operands[1] = 0;
 document.getElementById("numbers").innerHTML = 0;
}


   let button = document.querySelectorAll("button[id='operator'");
   for(let i =0; i < button.length; i++){
      button[i].addEventListener("click", function(){
         var x = this.value;
       var a =  document.getElementById("numbers").innerHTML = operands [0] + " " + x;
       console.log(a);
       console.log(typeof a);
      })
   }


function update(){
   for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
         operands[1] += this.value;
         operands[1] = parseFloat(operands[1]);
         console.log(operands[0].toString() + operands[1].toString());
         console.log(typeof operands[1]);
      });
   }
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
*/

let firstOperand = "";
let operator = "";
let secondOperand = "";
let display = document.getElementById("numbers");
let result = document.getElementById("result");


const buttons = document.querySelectorAll("button[id='num']");
for (let i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener("click", function() {
      if (!operator) {
         firstOperand += this.value;
         display.innerHTML = firstOperand;
      } else {
         secondOperand += this.value;
         display.innerHTML = firstOperand + " " + operator + " " + secondOperand;
      }
   });
}

const operatorButtons = document.querySelectorAll("button[id='operator']");
for (let i = 0; i < operatorButtons.length; i++) {
   operatorButtons[i].addEventListener("click", function() {
      if (!operator){
      operator = this.value;
      display.innerHTML = firstOperand + " " + operator;
      }
      else{
         display.innerHTML = firstOperand + " " + operator;
      }
   });
}

function addDecimal(){
   if (!secondOperand && !firstOperand.includes(".")){
      firstOperand = firstOperand + ".";
      display.innerHTML = firstOperand;
   }
}
document.getElementById("equals").addEventListener("click", function() {
   firstOperand = parseFloat(firstOperand);
   secondOperand = parseFloat(secondOperand);
   switch (operator) {
      case "+":
         result.innerHTML = firstOperand + secondOperand;
         break;
      case "-":
         result.innerHTML = firstOperand - secondOperand;
         break;
      case "x":
         result.innerHTML = firstOperand * secondOperand;
         break;
      case "/":
         result.innerHTML = firstOperand / secondOperand;
         break;
   }
});



document.getElementById("clear").addEventListener("click", function() {
   firstOperand = "";
   operator = "";
   secondOperand = "";
   display.innerHTML = "";
   result.innerHTML = "";
});



document.getElementById("clearEntry").addEventListener("click", function(){
  if(!operator){
   firstOperand = firstOperand.slice(0, -1);
   display.innerHTML = firstOperand;
  }
  else{
   secondOperand =  secondOperand.slice(0, -1);
   display.innerHTML = firstOperand + " " + operator + secondOperand;
  }
})

