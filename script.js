let firstOperand = [];
function increment(a){
   firstOperand.push(a);
   const operand1 = firstOperand.join('') -0;
   document.getElementById("numbers").innerHTML = firstOperand.join('') -0; //shows operand in display
   console.log(operand1);
}

document.getElementById("add").addEventListener("click", addition);
function addition(){
      document.getElementById("numbers").innerHTML = firstOperand.join('') -0 + " +";
   }



function ce(){
   firstOperand.pop();
   document.getElementById("numbers").innerHTML= firstOperand.join('') -0;
   if(firstOperand.join('') == 0){
      document.getElementById("numbers").innerHTML = "";
   }
}

function operate(firstOperand, secondOperand){

}

function add(a,b){

   return operand1 + secondOperand.join('') -0;
}

function solution(){
   console.log(add(operand1, 2));
}

