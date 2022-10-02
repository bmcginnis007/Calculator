let firstOperand = [];
function increment(a){
   firstOperand.push(a);
   const operand = firstOperand.join("") -0; //turns the array from a string into integers
   document.getElementById("numbers").innerHTML = operand; //shows operand in display
}

document.getElementById("add").addEventListener("click", wipe);
function wipe(){
      document.getElementById("numbers").innerHTML = firstOperand.join('') -0 + "" + "+";
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

function add(firstOperand, secondOperand){
   return firstOperand.join('') -0 + secondOperand.join('') -0;
}

function solution(){
   console.log(add(firstOperand.join('') -0, secondOperand.join('') -0));
}

