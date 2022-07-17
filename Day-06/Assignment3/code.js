// 1. Write code implementations of arr methods -

// a. forEach

const arr= [1,2,3,4,5];

const newarr=[]

arr.forEach((element)=>{
    newarr.push(element+3)
})

console.log(newarr);

// b. map

newarr.map((element)=>{
    console.log(element**2)
})

// console.log(newarr) [ 4, 5, 6, 7, 8 ] vallue of array not modify.

// c. filter

let output=null;

output= newarr.filter((element  ) => {
    return element> 5
})

console.log(output)


// d. reduce


// const numbers = [2, 5, 8, 12, 33];
// let result = 0;

// for (let i = 0; i < numbers.length; i++) {
//   result += numbers[i];
// }

// Above code can be written using reduce.  

const numbers = [2, 5, 8, 12, 33];
const result = numbers.reduce((result, currentNumber) => result + currentNumber, 0);

console.log(result)


// e. includes

output= numbers.includes(12) //true

output=numbers.includes(1)

console.log(output)


// f. some

const ages = [3, 10, 18, 20];

output = ages.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}

console.log(output) //true because some values are greater than 18.


// g. every

output = ages.every(checkAdult) // return false because every element is not greater than 18.

output = ages.every((e)=> e > 2 ) //return true.

console.log(output)


// 2. Simple array implementation

const menu = new Array ("tea", "coffee", "milk" ,"water")

console.log(menu[2])// output: 'milk' accessing element at index 2

// 3. To do list task

/* you have two arrays
1. ToDo
2. Completed
! implement three functions
1. add(title)
2. remove(id)
3. update(id, title)
4. markAsCompleted(id)
* The ToDo array is a list of tasks (object)
each task has an id (number) and a title (string)
* eg :
{id: 1, task: 'Learn JavaScript'}
Implementation
1. add function will add a task to the ToDO array with an unique
id
- it will accept a title as a string and return the id of the
new task
- it will return -1 if the title is empty
2. remove function will remove a task from the TODO array
- it will accept an id as a number and return true if the
task was removed
- it will return false if the id is not found
3. update function will update the title of a task
- it will accept an id as a number and a title as a string
- it will return true if the task was updated
- it will return false if the id is not found
4. markAsCompleted will remove a task from the TODO array and add
it to the Completed array
- it will accept an id as a number and return true if the
task has been moved
- it will return false if the id is not found
Best of luck!
*/

'use strict'

const ToDo=[]

const Completed=[]

const task = {
  id : null,
  title : null,
}


function add( title ){

const id = Math.floor(Date.now()*Math.random())

  const newtask = Object.create(task)
  if(!id ||! title ){
    return -1
  }

  //unique id
  newtask.id = id
  newtask.title= title

  ToDo.push(newtask)

  return id;
}

function remove (id){
  if(!id){
    return false
  }

  const toremove = ToDo.find((e)=>{
    // e.id === id
    return ( e.id === Number(id) )
  } )

  if(!toremove){
    console.log("No such id exist to remove.")
    return false
  }

  delete ToDo[ToDo.indexOf(toremove)] 
}


//update 

 function update(id, title)
 {
  if(!id || !title){return false;} 

  ToDo.map((ele)=>{
    if(ele.id === Number(id)){
      ele.title = title

      return true
    }
  })

 }


//mark as completed

function markAscompleted(id){
if(!id){
  return false
}

ToDo.map((ele)=>{
  if(Math.floor(ele.id/10000000) === Math.floor(Number(id)/10000000)){
    const temp =ele

    Completed.push(ele)
    delete ToDo[ToDo.indexOf(ele)]
    return true
  }
})


}



const task1 = add("my first task");

const task2 =add("my second task");

remove(task1)

update(task2,"My second task updated")

markAscompleted(task2)


console.log('final ToDo :')
console.log(ToDo)

console.log('final Completed :')
console.log(Completed)

