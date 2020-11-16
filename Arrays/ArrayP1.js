//Store in Array
function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
} 
var numbers = new Array();
for (var i = 0; i <10; i++) {
    num=randomNumber(100,1000);
    console.log(num);
    numbers[i]=num;
  }

//Find Second Max and Second Min
  var secondMax = Get_SecondMax();
  function Get_SecondMax(){ 
    var max = Math.max.apply(null, numbers); // get the max of the array
    numbers.splice(numbers.indexOf(max), 1); // remove max from the array
    return Math.max.apply(null, numbers); // get the 2nd max
};
var secondMin = Get_SecondMin();
  function Get_SecondMin(){ 
    var min = Math.min.apply(null, numbers); // get the max of the array
    numbers.splice(numbers.indexOf(min), 1); // remove max from the array
    return Math.min.apply(null, numbers); // get the 2nd max
};
console.log(secondMax);
console.log(secondMin);
//using sort method
var sortNumbers = new Array();
for (var i = 0; i <10; i++) {
    num=randomNumber(100,1000);
    console.log(num);
    sortNumbers[i]=num;
  }
sortNumbers.sort();
console.log(sortNumbers);
console.log(sortNumbers[1]);
console.log(sortNumbers[sortNumbers.length-1]);

