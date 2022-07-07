/* 4. Write a JavaScript program to get the difference between a given number
and 13, if the number is greater than 13 return double the absolute
difference */

function programQ4(num) {
    if (num && typeof num === 'number') {
        if (num > 13) {
            return 2 * Math.abs(num - 13);
        }

        return difference(num, 13);
    } else {
        return NaN;
    }

}

function difference(num1, num2) {
    /* no need to check the type of num1 and num2 */
    if (num1 > num2) {
        return num1 - num2;
    } else {
        return num2 - num1;
    }
}


const numbers = [1, 3, 12, 'a', null, 18.5, -2, 20, 5, undefined];
numbers.forEach((num) => console.log(programQ4(num)))