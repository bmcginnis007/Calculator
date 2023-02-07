let value = "";
let value2 = "";
let buttons = document.querySelectorAll("button[id='num']");
for (let i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener("click", function() {
      value += this.value;
      value = parseFloat(value);
      document.getElementById("numbers").innerHTML = value;
      console.log(value);
      console.log(typeof value);
   });
}

document.getElementById("add").addEventListener("click", function(){
   document.getElementById("numbers").innerHTML = value + " +";
   });


function clearEntry(){
   value = value.toString();
   value = value.slice(0, -1);
   value = parseFloat(value);
   if(isNaN(value)){
      value = 0;
   }
   document.getElementById("numbers").innerHTML = value;
   console.log(value);
   console.log(typeof value);
}

function allClear(){
 value = 0;
 document.getElementById("numbers").innerHTML = value;
}

function operate(a, operator, b){
   

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

