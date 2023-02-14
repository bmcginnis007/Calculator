let firstOperand = "";
let operator = "";
let secondOperand = "";
let display = document.getElementById("numbers");
let secondDisplay = document.getElementById("result");
let result = 0;


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
         result = firstOperand + secondOperand;
         secondDisplay.innerHTML = result;
         break;
      case "-":
         result = firstOperand - secondOperand;
         secondDisplay.innerHTML = result;
         break;
      case "*":
         result = firstOperand * secondOperand;
         secondDisplay.innerHTML = result;
         break;
      case "/":
         result = firstOperand / secondOperand;
         secondDisplay.innerHTML = result;
         break;
   }
   if (secondDisplay.innerHTML.length > 15){
      secondDisplay.innerHTML.slice(0, -1);
   }
   console.log(result);
   console.log(typeof result);
});



document.getElementById("clear").addEventListener("click", function() {
   firstOperand = "";
   operator = "";
   secondOperand = "";
   display.innerHTML = "";
   secondDisplay.innerHTML = "";
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



