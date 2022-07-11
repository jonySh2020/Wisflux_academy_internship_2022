// 1. Average of array nums in Javascript?

const arr = [1, 5, 3, 5, 9, 32, 323, 42, 31, 89, 23];

function sumofArray(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}

console.log(sumofArray(arr));