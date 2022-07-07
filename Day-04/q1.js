/* 1. Write a JavaScript program to find the area of a triangle where lengths of
the three of its sides are 5, 6, 7. */

//apply Heron's formula to find area of triangle.

function areaofTriangle(side1, side2, side3) {
    const s = (side1 + side2 + side3) / 2; /*semi-perimeter of triangle */
    return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
}


const side1 = 5;
const side2 = 6;
const side3 = 7;
console.log(areaofTriangle(side1, side2, side3))