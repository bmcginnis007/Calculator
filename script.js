let stringArray = [];
let numberArray = stringArray.map(Number);
const seven = document.getElementById("btn7").value;
const eight = document.getElementById("btn8").value;



function increment7(){
   stringArray.push(seven);
   let numberArray = stringArray.map(Number);
   document.getElementById("numerator").innerHTML= numberArray.join("");
   console.log(numberArray[0] + 10);
}

function increment8(){
   stringArray.push(eight);
   document.getElementById("numerator").innerHTML= numberArray.join("");
}

function test(){
   console.log(numberArray[0]);

}
  