function increment(a,b){
   document.getElementById("numerator").innerHTML= a * 10 + b;
}

  function increment8(){
    if (document.getElementById("btn7").value == ""){
      document.getElementById("numerator").innerHTML= 8;
      document.getElementById("btn7").value = 8;
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