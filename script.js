let firstOperand = "";
let operator = "";
let secondOperand = "";
let counter = 0;
let display = document.getElementById("numbers");
let secondDisplay = document.getElementById("result");
let result = 0;


const buttons = document.querySelectorAll("button[id='num']");
for (let i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener("click", function() {
      if (!operator) {
         firstOperand += this.value;
         secondDisplay.innerHTML = firstOperand;
         secondDisplay.style.fontSize = "50px";
      }
      if (!operator && firstOperand === "00"){
         firstOperand = "0";
         secondDisplay.innerHTML = firstOperand;
      }
      if (operator && firstOperand){
         secondOperand += this.value;
         secondDisplay.innerHTML = secondOperand;
         secondDisplay.style.fontSize = "50px";
      }
      if (secondOperand === "00"){
         secondOperand = "0";
         secondDisplay.innerHTML = secondOperand;
      }
      if (counter === 1){
         firstOperand = 0 - firstOperand;
         secondDisplay.innerHTML = firstOperand;
         counter = 0;
         console.log(firstOperand);
         console.log(typeof firstOperand);
      }
      console.log(firstOperand);
   });
}

const operatorButtons = document.querySelectorAll("button[id='operator']");
for (let i = 0; i < operatorButtons.length; i++) {
   operatorButtons[i].addEventListener("click", function() {
      if (!operator){
      operator = this.value;
      display.innerHTML = firstOperand + " " + operator;
      }/*
      if (!firstOperand){
         firstOperand = "0";
         display.innerHTML = firstOperand + " " + operator;
      }*/
      if (!firstOperand && operator === "-"){
         display.innerHTML = "";
         secondDisplay.innerHTML = "-";
         operator = "";
         counter = 1;
      }
      if (firstOperand && operator){
         operator = this.value;
         display.innerHTML = firstOperand + " " + operator;
      }
      if (operator === "/"){
         display.innerHTML = firstOperand + " " + "&divide;";
      }
      if (operator === "*"){
         display.innerHTML = firstOperand + " " + "&times;";
      }/*
      if (firstOperand < 0){ // enables negative numbers to be entered into the display
         secondDisplay.innerHTML = firstOperand;
         secondOperand = "";
      }*/
      console.log(firstOperand);
   });
}

function addDecimal(){
   firstOperand = firstOperand.toString();//changes firstOperand from a Number to a string if it's a negative number
  if (!secondOperand && !firstOperand.includes(".")){
   firstOperand = firstOperand + ".";
   secondDisplay.innerHTML = firstOperand;
   }
   if (firstOperand === "."){
      firstOperand = "0" + ".";
      secondDisplay.innerHTML = firstOperand;
   }
   if (firstOperand && operator && !secondOperand.includes(".")){
      secondOperand = secondOperand + ".";
      secondDisplay.innerHTML = secondOperand;
   }
   
   if (secondOperand === "."){
      secondOperand = "0" + ".";
      secondDisplay.innerHTML = secondOperand;
   }
}

document.getElementById("equals").addEventListener("click", function() {
   if (firstOperand && operator && secondOperand){
   switch (operator) {
      case "+":
         result = (firstOperand * 10 + secondOperand * 10) / 10;
         display.innerHTML = firstOperand + " " + operator + " " + secondOperand + " " + "=";
         secondDisplay.innerHTML = result.toLocaleString("en-US");
         firstOperand = result.toString();
         secondOperand = "";
         operator = "";
         console.log(result);
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
         operator = "&times;"
         display.innerHTML = firstOperand + " " + operator + " " + secondOperand + " " + "=";
         secondDisplay.innerHTML = result.toLocaleString("en-US");
         firstOperand = result.toString();
         secondOperand = "";
         operator = "";
         break;
      case "/":
         result = firstOperand / secondOperand;
         operator = "&divide;"
         display.innerHTML = firstOperand + " " + operator + " " + secondOperand + " " + "=";
         secondDisplay.innerHTML = result.toLocaleString("en-US");
         firstOperand = result.toString();
         secondOperand = "";
         operator = "";
         break;
   }
}
   if (result === Infinity){
      alert("Trying to divide by zero is like trying to divide your age by the number of times you've used a calculator correctly 😃😃😃");
      display.innerHTML = "";
      secondDisplay.innerHTML = "";
      firstOperand = "";
      secondOperand = "";
      operator = "";
   }

   if (secondDisplay.innerHTML.length > 11){
      secondDisplay.style.fontSize = "23px";
   }
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
  if (firstOperand && secondOperand){
   secondOperand = secondOperand.slice(0, -1);
   display.innerHTML = firstOperand + operator;
   secondDisplay.innerHTML = secondOperand;
   }
  if (firstOperand && secondOperand){
   secondOperand =  secondOperand.slice(0, -1);
   secondDisplay.innerHTML = secondOperand;
  }
})

function limitDisplay(){
if (secondDisplay.innerHTML.length > 8 && !operator) {
   firstOperand = firstOperand.slice(0, -1);
   secondDisplay.innerHTML = firstOperand;
}
else if (secondDisplay.innerHTML.length > 8 && operator){
   secondOperand = secondOperand.slice(0, -1);
   secondDisplay.innerHTML = secondOperand;
}
}



