// 2. Swap two numbers by reference?
let num1 = 13;
let num2 = 18;

console.log(`num1 =${num1} and num2 =${num2}`);

const swap = (firstNum, secondNum) => {
    [num1, num2] = [num2, num1];
    // let temp=firstNum; //why not working ?
    // firstNum=secondNum;
    // secondNum=temp;
}



swap(num1, num2);

console.log(`num1 =${num1} and num2 =${num2}`);