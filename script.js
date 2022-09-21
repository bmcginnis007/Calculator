function increment(a,b){
   document.getElementById("numerator").innerHTML= a * 10 + b;
}

  function increment8(){
    if (document.getElementById("btn8").value == ""){
      document.getElementById("btn8").value = 8;
      document.getElementById("numerator").innerHTML= document.getElementById("btn8").value;
      
    }
    else if (document.getElementById("btn7").value == 8){
      document.getElementById("numerator").innerHTML= 88;
      document.getElementById("btn7").value = 88;
    }
    else if (document.getElementById("btn7").value == 88){
      document.getElementById("numerator").innerHTML= 888;
      document.getElementById("btn7").value = 888;
    }
  }