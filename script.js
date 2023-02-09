let firstOperand = "";
let operation = "";
let secondOperand = "";
var operands = [firstOperand];
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
 document.getElementById("numbers").innerHTML = operands[0];
}

function myFunction(){
   let button = document.querySelectorAll("button[id='operator'");
   for(let i =0; i < button.length; i++){
      button[i].addEventListener("click", function(){
         var x = this.value;
         console.log(x);
      })
   }
}

function operate(){
   myFunction()};

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

