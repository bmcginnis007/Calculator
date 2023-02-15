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
         firstOperand = parseFloat(firstOperand);
         secondDisplay.innerHTML = firstOperand.toLocaleString("en-US");
         console.log(firstOperand)
         console.log(typeof firstOperand);
      } else {
         secondOperand += this.value;
         secondDisplay.innerHTML = secondOperand;
         console.log(secondOperand);
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
   });
}

function addDecimal(){
  if (!secondOperand && !firstOperand.includes(".")){
   firstOperand = firstOperand + ".";
   secondDisplay.innerHTML = firstOperand;
  }
  else if (firstOperand && !secondOperand.includes(".")){
   secondOperand = secondOperand + ".";
   secondDisplay.innerHTML = secondOperand;
}
}


document.getElementById("equals").addEventListener("click", function() {
   firstOperand = parseFloat(firstOperand);
   secondOperand = parseFloat(secondOperand);
   if (firstOperand && operator && secondOperand){
   switch (operator) {
      case "+":
         result = firstOperand + secondOperand;
         display.innerHTML = firstOperand + " " + operator + " " + secondOperand + " " + "=";
         secondDisplay.innerHTML = result.toLocaleString("en-US");
         firstOperand = result.toString();
         secondOperand = "";
         operator = "";
         break;
      case "-":
         result = firstOperand - secondOperand;
         display.innerHTML = firstOperand + " " + operator + " " + secondOperand + " " + "=";
         secondDisplay.innerHTML = result.toLocaleString("en-US");
         firstOperand = result.toString();
         secondOperand = "";
         operator = "";
         break;
      case "*":
         result = firstOperand * secondOperand;
         display.innerHTML = firstOperand + " " + operator + " " + secondOperand + " " + "=";
         secondDisplay.innerHTML = result.toLocaleString("en-US");
         firstOperand = result.toString();
         secondOperand = "";
         operator = "";
         break;
      case "/":
         result = firstOperand / secondOperand;
         display.innerHTML = firstOperand + " " + operator + " " + secondOperand + " " + "=";
         secondDisplay.innerHTML = result.toLocaleString("en-US");
         firstOperand = result.toString();
         secondOperand = "";
         operator = "";
         break;
   }
}
   if (operator && secondDisplay.innerHTML === "0"){
      alert("Trying to divide by zero is like trying to divide your age by the number of times you've used a calculator correctly :D");
      display.innerHTML = "";
      secondDisplay.innerHTML = "";
      firstOperand = "";
      secondOperand = "";
      operator = "";
   }
   console.log(secondDisplay.innerHTML);
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
   secondDisplay.innerHTML = firstOperand;
  }
  else{
   secondOperand =  secondOperand.slice(0, -1);
   secondDisplay.innerHTML = firstOperand + " " + operator + secondOperand;
  }
})

function limitDisplay(){
if (secondDisplay.innerHTML.length > 15 && !operator) {
   firstOperand = firstOperand.slice(0, -1);
   display.innerHTML = firstOperand;
}
else if (secondDisplay.innerHTML.length >15 && operator){
   secondOperand = secondOperand.slice(0, -1);
   display.innerHTML = secondOperand;
}
}




