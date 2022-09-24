let numberArray = [];

function increment(a){
   numberArray.push(a);
   document.getElementById("numerator").innerHTML= numberArray.join("");
   console.log(typeof numberArray[0]);
}

function ce(){
   numberArray.pop();
   document.getElementById("numerator").innerHTML= numberArray.join("");
}
  