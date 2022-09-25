let numberArray = [];

function increment(a){
   numberArray.push(a);
   document.getElementById("numbers").innerHTML= numberArray.join("");
}

function ce(){
   numberArray.pop();
   document.getElementById("numbers").innerHTML= numberArray.join("");
}
  