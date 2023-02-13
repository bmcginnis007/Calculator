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
         display.innerHTML = secondOperand;
      }
   });
}


const operatorButtons = document.querySelectorAll("button[id='operator']");
for (let i = 0; i < operatorButtons.length; i++) {
   operatorButtons[i].addEventListener("click", function() {
      if (!operator){
      operator = this.value;
      display.innerHTML = firstOperand;
      }
   });
}

function addDecimal(){
  if (!secondOperand && !firstOperand.includes(".")){
   firstOperand = firstOperand + ".";
   display.innerHTML = firstOperand;
  }
  else if (firstOperand && !secondOperand.includes(".")){
   secondOperand = secondOperand + ".";
   display.innerHTML = secondOperand;
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
      case "*":
         result.innerHTML = firstOperand * secondOperand;
         break;
      case "/":
         result.innerHTML = firstOperand / secondOperand;
         break;
   }
   if (result.innerHTML.length > 15){
      result.innerHTML = Math.round(result);
   }
   console.log(typeof result.innerHTML);
});



document.getElementById("clear").addEventListener("click", function() {
   firstOperand = "";
   operator = "";
   secondOperand = "";
   display.innerHTML = "";
   result.innerHTML = "";
});



document.getElementById("clearEntry").addEventListener("click", function(){ //removes last character from firstOperand string if operator has not been selected. Otherwise, removes last character from secondOperand
  if(!operator){
   firstOperand = firstOperand.slice(0, -1);
   display.innerHTML = firstOperand;
  }
  else{
   secondOperand =  secondOperand.slice(0, -1);
   display.innerHTML = firstOperand + " " + operator + secondOperand;
  }
})

function limitDisplay(){
if (display.innerHTML.length > 15 && !operator) {
   firstOperand = firstOperand.slice(0, -1);
   display.innerHTML = firstOperand;
}
else if (display.innerHTML.length >15 && operator){
   secondOperand = secondOperand.slice(0, -1);
   display.innerHTML = secondOperand;
}
}



