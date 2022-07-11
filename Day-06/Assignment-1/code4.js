// 4. Sort an array by both ascending and descending order?

const arr = [1, 23, 323, 1434, 35, 67, 688, 4678, 7887];

//sort array in ascending order

arr.sort((num1, num2) => num1 - num2 | undefined);

console.log(`Ascending : ${arr}`)

arr.sort((num1, num2) => num2 - num1 | undefined);

console.log(`Descending : ${arr}`);