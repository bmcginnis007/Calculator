const numbers = [];
const seven = document.getElementById("btn7").value;
const eight = document.getElementById("btn8").value;



function increment7(){
   numbers.push(seven);
   document.getElementById("numerator").innerHTML= numbers.join("");
}
function increment8(){
   numbers.push(eight);
   document.getElementById("numerator").innerHTML= numbers.join("");
}

function test(){
   document.getElementById("numerator").innerHTML= numbers[0,1];
}
  