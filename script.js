let firstOperand = [];
let secondOperand = [];
function increment(a){
   firstOperand.push(a);
   let input1 = firstOperand.join('') -0;
   document.getElementById("numbers").innerHTML = input1; //shows operand in display
   if(document.getElementById("numbers").innerHTML == input1 + " +"){
      increment(a);
      secondOperand.push(a);
      let input2 = secondOperand.join('') -0;
      document.getElementById("numbers").innerHTML = input1 + " +" + input2;
   }
}

document.getElementById("add").addEventListener("click", addition);
function addition(){
   firstOperand.push(" +");
   document.getElementById("numbers").innerHTML = firstOperand.join('') -0;
   }



function ce(){
   firstOperand.pop();
   document.getElementById("numbers").innerHTML= firstOperand.join('') -0;
   if(firstOperand.join('') == 0){
      document.getElementById("numbers").innerHTML = "";
   }
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

