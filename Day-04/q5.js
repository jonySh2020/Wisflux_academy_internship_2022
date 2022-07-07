/* 5. Write a JavaScript program to find the largest of three given integers.*/

function findLargestInThreeInt(integer1, integer2, integer3) {

    if (Number.isInteger(integer1) && Number.isInteger(integer2) && Number.isInteger(integer3)) {
        let largest = integer1;
        if (integer2 > largest) {
            largest = integer2;
        }
        if (integer3 > largest) {
            largest = integer3;
        }
        return largest;
    }

    return NaN;

}


const test = [[1,3,'a'], [4,2,9] ,[32,37,23] ,[3,4,10], [-10,0,23]]

test.forEach((testlist) => console.log(findLargestInThreeInt(testlist[0],testlist[1],testlist[2])));