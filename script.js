let numberArray = [];

function increment(a){
   numberArray.push(a);
   document.getElementById("numbers").innerHTML= numberArray.join("");
}

function ce(){
   numberArray.pop();
   document.getElementById("numbers").innerHTML= numberArray.join("");
}

const array1 = [7, 7, 7];
const produceAndAdd = (array1 = []) => {
   let sum = 0;
   for(let i=0; i < array1.length; i++) {
      const product = (array1[i] * 10 + 7);
      sum += product;
   };
   return sum;
};
console.log(produceAndAdd(array1));