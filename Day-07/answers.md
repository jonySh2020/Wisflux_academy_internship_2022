#Day-07 Assignment

###1. What are anonymous functions in JavaScript?\
Answer- a function that have no name associated with it.\
ex-\
```function(arg){
...
}
```

###2. Explain strict comparison and Abstract comparison in javascript?\
Answer- abstract comparison operator in javascript is ( '==') first the operands are converted to same type, and then a comparison is performed.\
and strict comparison operator is '===' , this operator checks whether two operand are equal and are of the same type.\
`1=='1'` --> true ( abstract comparison operator )\
`1==='1'` --> false ( strict comparision operator )\


###3. Difference b/w arrow functions and regular functions?\
Answer-\
differ in the syntax:\ 
arrow functions are differ in syntax than a regular function\
regular function syntax:\
```  function function_name( arguments){
  ...//code
  }
 ```
arrow function syntax:\
```  (arguments)=>{
  ...//code
  }
```
  
  * NO parenthsis required when only single argument is present.\
  * NO curly braces and return keyword required when function contain single line code.\
  
  Arguments binding:\
  arrow function doesn't have arguments binding however they have access to the arguments object of the closest non arrow parent function.\
  
  Use of this keyword:\
  unlike regular functions arrow function doesn't have their own this.\
  The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in closest non-arrow parent function.\
  arrow function cannot be used with new keyword because they are not constructible and callable. while we can use new keyword with the regular function.\
  
  Duplicate name parameters:\
  NO duplicate parameters allowed in arrow function in any mode ( strict or non- strict ) while regular function allows duplicate name parameters in the non strict mode.\
  
  

###4. What is Hoisting in JavaScript?\
Answer- a variable can be used before it has been declared.\ 
example : \

```x = 5; // Assign 5 to x

console.log(x);    // Display value of x ( x=5)

var x=6; // Declare x
```
To avoid bugs, always declare all variables at the beginning of every scope.\


###5. JavaScript is a garbage collected programming language, explain how?\
Answer- Garbage collection is a process that is implemented automatically. Objects can be retained in memory while they are reachable.\
Examples-// book has a reference to the object\
```let book = {
  name: "Javascript"
};
book = null;
console.log(book);
```
 here the object becomes unreachable. The garbage collector junks the data, freeing the memory.\
 

###6. Explain Shallow copy vs Deep copy in Javascript?\
Answer- In Shallow copy a reference variable is copied into a new reference variable using the assignment operator, both old and new variables points to the same reference in the memory.\
Unlike the shallow copy, deep copy makes a copy of all the members of the old object, allocates separate memory location for the new object and then assigns the copied members to the new object.\
there is no effect on other variable when change any of the variable.\ 

###7. What is Object.freeze\
Answer- This method freeze the object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevent change in writablity of existing properties.\
freeze() returns the same object that was passed in.\
example:\
```const obj={
a:31
};

Object.freeze(obj);
obj.a=4;
//throws an error in strict mode

console.log(obj.a) //expected output =31
```
