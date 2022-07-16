// 4. Merge to sets in javascript? (hint use Set class in javascript)

const days = new Set(['sunday', 'monday', 'saturday']);
const dayslist = new Set(['wednesday','sunday','friday','tuesday', 'thursday'])

console.log(`set days: ${days} and, \n set dayslist : ${dayslist}`)

function MergeSets(set1, set2){
    set2.forEach(element => {
        set1.add(element)
    });

    return set1;
}



console.log(MergeSets(days,dayslist))