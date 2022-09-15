function increment(){
    if (document.getElementById("btn7").value == ""){
      document.getElementById("numerator").innerHTML= 7;
      document.getElementById("btn7").value = 7;
    }
    else if (document.getElementById("btn7").value == 7){
      document.getElementById("numerator").innerHTML= 77;
      document.getElementById("btn7").value = 77;
    }
    else if (document.getElementById("btn7").value == 77){
      document.getElementById("numerator").innerHTML= 777;
      document.getElementById("btn7").value = 777;
    }
  }