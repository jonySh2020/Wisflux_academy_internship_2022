// 1. Write a function that generates a random number between two ranges, -100 to 0 and 800 - 900

// function radomInTwoRange(min1, max1, min2, max2){
 function radomInTwoRange(min1, max1, min2, max2){

//set an persistant for switching range of numbers
let decide= Math.floor(Math.random()*101)+1
// console.log(decide)

let  randNO;
if (decide %2 == 0){
  randNO= Math.floor(Math.random()*(max1-min1+1))+min1;
}
else{
    randNO= Math.floor(Math.random()*(max2-min2+1))+min2;
}

return randNO;
}


console.log(radomInTwoRange(-100,8,800,900));

// Eg Numbers: -45, -99, 876, 801, -65, 834, -78, 888



