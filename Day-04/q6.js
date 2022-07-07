/* 6. Write a JavaScript program to check the total marks of a student in various
examinations. The student will get A+ grade if the total marks are in the
range 89..100 inclusive, if the examination is "Final-exam." the student will
get A+ grade and total marks must be greater than or equal to 90. Return
true if the student get A+ grade or false otherwise. */

function isGradeAPlus(examtype, marks){
    let baseAPGradeMarks;
    if(examtype === "Final-exam"){
      baseAPGradeMarks=90;
    }
    else{
         baseAPGradeMarks=89;
    }

    if(marks >= baseAPGradeMarks && marks <= 100){
        return true;
    }
    else{
        return false;
    }

}



console.log(isGradeAPlus("Final-exam", 89))
console.log(isGradeAPlus("Final-exam", 90))
console.log(isGradeAPlus("Internals", 89))
console.log(isGradeAPlus("Internals", 89))
console.log(isGradeAPlus("Normal-exam",70))
console.log(isGradeAPlus("Normal-exam",90))
