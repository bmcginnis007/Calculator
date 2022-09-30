let numberArray = [];
function increment(a){
   numberArray.push(a);
   if(numberArray.length < 17){
   const update = numberArray.reduce((acc) => acc * 10 + a, 0,);
   document.getElementById("numbers").innerHTML = update;
   }
}


function ce(){
   numberArray.pop();
   document.getElementById("numbers").innerHTML= numberArray.join("");
}



