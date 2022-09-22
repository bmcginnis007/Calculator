const numbers = [];
const buttons = document.getElementById("btn");
const value = document.querySelectorAll(buttons).value;
const myNodelist = document.querySelectorAll("button");

function increment(){
   numbers.push(value);
   document.getElementById("numerator").innerHTML= numbers;
}

  