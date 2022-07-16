# Assignment-02 Day-06

## Theory-

### 1. Why do we use functions in JavaScript?

Answer- function are used to avoid repeation in the code and make program more readable and modular.

```javascript
function fun(args){
    /* logic of function */ 
}
```

### 2. What is Function Invocation?

Answer- invoking a function means calling a function using syntax `fun()` paranthesis right next the name of a function name.

### 3. Does a function behave like an object in Javascript? Prove it by an example?

Answer-  we create a function and treat it like if we just created an object.

* Functions support assigning  variables:

see the code.

```javascript
// Function declaration.
function showFavoriteIceCream() {
    const favIceCream = 'chocolate';
  
    console.log(`My favorite ice cream is ${favIceCream}`);
  }
  
  // Let's assign a property.
  showFavoriteIceCream.flavours = ['chocolate', 'vanilla', 'strawberry'];
  
  // Let's log the showFavoriteIceCream function.
  console.log(showFavoriteIceCream);
  
  // Log
  // { [Function: showFavoriteIceCream]
  // flavours: [ 'chocolate', 'vanilla', 'strawberry' ] } -> property assigned

  showFavoriteIceCream.showFlavours = function () {
    return this.flavours;
  };

  console.log(`show flavours of Ice-cream : ${showFavoriteIceCream.showFlavours()}`);
```

The function is assigned to a variable and can be called via that variable.

* They can be passed as parameters in another function.

```javascript
// Function declaration
function getFavoriteIceCream() {
  return 'chocolate';
}

// Function declaration with params
function logFavoriteIceCream(func) {
  return func();
}

// Passing getFavoriteIceCream as a parameter in logFavoriteIceCream
console.log(logFavoriteIceCream(getFavoriteIceCream)); // chocolate

```

* Function can return from another function.

```javascript
// Function declaration
function getFavoriteIceCream() {
  const myFavIceCream = 'chocolate';
  // Returns another function declaration
  return function () {
    return 'My favorite ice cream is ' + myFavIceCream;
  };
}

// storing function returned
const functionReturned = getFavoriteIceCream();

// executing function returned
console.log(functionReturned()); // My favorite ice cream is chocolate

```

The built-in Function object has properties like name, length and has methods like call, apply and bind. Let's log some of them to see an existing proof:

```javascript
// Function declaration.
function showFavoriteIceCream(favIceCream) {
  console.log(`My favorite ice cream is ${favIceCream}`);
}

// Function Properties

console.log('name: ' + showFavoriteIceCream.name); // showFavoriteIceCream

console.log('length: ' + showFavoriteIceCream.length); // 1

// Function methods

console.log('call: ' + showFavoriteIceCream.call); // function call()

console.log('apply: ' + showFavoriteIceCream.apply); // function apply()

console.log('bind: ' + showFavoriteIceCream.bind); // function bind()

```

Therefore it is key to understand that functions are not "some special thing" in JavaScript but that they are just objects. Objects with special, built-in methods and properties.

### 4. What are Events in Javascript?

Answer- An Event is the result of any action performed by user corresponds to any change/manipulation in a web page or an HTML element. Changes like clicking with mouse, loading a page, pressing keys on keyboard, hovering mouse over an element etc are called Events.

Events in JavaScript make a webpage interactive and react according to the action performed by the user. These make pages attractive by executing a JavaScript code when any event occurs.

these are some basic events in javascript :

|#Event | #Description |
| ----------| -----------|
| onclick | This event occur when a user click on an HTML element or a webpage |
| ondblclick | This event also occurs by clicking on an HTML element or webpage, but this time it should be clicked twice to execute the JavaScript code. |
| oncontextmenu |  This event is also a mouse click event which occurs by right clicking on the mouse. |
| onkeypress | This event occurs when a user press key on their keyboard. Once a user press key, then the JS code get executed. |
| onmouseenter | This event occur by hovering (moving cursor over) mouse over an HTML element. |
| onmouseout | This event occurs when a mouse pointed on an HTML element get away from that. |
| onload | This event occurs when a page gets loaded. The JS code gets executed at the page loading time. |
| onresize |The JS written for this event get executed, when user resize the browser window (like restore window).|
| onblur | This event triggers when user’s focus is moved from an element. |

### 5. What is a string?

Answer- A string is a data type used in the programming languages which represents text. It includes a set of characters that can also contain spaces and numbers. For example, the word "hamburger" and the phrase "I ate three hamburgers" are both strings. Typically, programmers must enclose strings in quotation marks for the data to recognize as a string.

```javascript
let str="I ate three hamburgers";
```

Six other escape sequences are valid in JavaScript:

| #Code | #Result |
|---|---|
|\b | Backspace |
|\f | Form Feed |
|\n | New Line |
|\r |Carriage Return |
|\t | Horizontal Tabulator |
|\v | Vertical Tabulator |

Example  of  escape sequence:

```javascript
let str ="Hello\n world!";
console.log(str); /* output =   Hello
                                world! */
```

Since string is an object in javascript so it has some inbuit methods and properties to manipulate strings.

Example : The `length` property returns the length of a string:

* There are methods for extracting a part of a string:

`slice(start, end)`
`substring(start, end)`
`substr(start, length)`

* Replace the part of string:

The `replace()` method replaces a specified value with another value in a string.

* Converting to Upper and Lower Case

A string is converted to upper case with `toUpperCase()`.

A string is converted to lower case with `toLowerCase()`.

`concat()` joins two or more strings.

### 6. What is an array? Is it static or dynamic in Javascript?

Answer- An array is a special variable, which can hold more than one value:

For example:

```javascript
const cars = ["Car" "Bike", "Scooter"];
```

any values under a single name, and you can access the values by referring to an index number.

example creating array and accessing it by index.

```javascript
const arr = [1,'john',3,'kavya',5];
const array = new Array('ajay',2,'nikita',4,5);

// accessing the element.
console.log(arr[1]); // Log the value of array element which has the  index value 1
```

Arrays are Objects in javascript.

#### Array Properties and Methods

The real strength of JavaScript arrays are the built-in array properties and methods:

```javascript
cars.length   // Returns the number of elements
cars.sort()   // Sorts the array
```

there are so many methods and properties defined for array which help us in solving many real life problems easily.

#### Arrays are dynamic in javascript

Array in javascript supports increasing or decreasing the size of the array automatically. JavaScript is not typed dependent so there is no static array. JavaScript directly allows array as dynamic only. We can perform adding, removing elements based on index values.

### 7. Difference between Map and Set?

Answer-  Maps are ordered collections of key/value pairs, and Sets are collections of unique values.

creating maps in javascript.

```javascript
const map = new Map()
```

#### Adding Values to a Map

You can add values to a map with the set() method. The first argument will be the key, and the second argument will be the value.

The following adds three key/value pairs to map:

```javascript
map.set('firstName', 'Alan')
map.set('lastName', 'Walker')

console.log(map) // Map(2) { 'firstName' => 'Alan', 'lastName' => 'Walker' }
```

#### When to Use Map

Maps are similar to Objects in that they hold key/value pairs, but Maps have several advantages over objects:

* Size - Maps have a size property, whereas Objects do not have a built-in way to retrieve their size.

* Iteration - Maps are directly iterable, whereas Objects are not.

* Flexibility - Maps can have any data type (primitive or Object) as the key to a value, while Objects can only have strings.

* Ordered - Maps retain their insertion order, whereas objects do not have a guaranteed order.

#### sets

A Set is a collection of unique values. Unlike a Map, a Set is conceptually more similar to an Array than an Object, since it is a list of values and not key/value pairs. However, Set is not a replacement for Arrays, but rather a supplement for providing additional support for working with duplicated data.
creating sets in javascript.

```javascript
const set = new Set()
```

Adding items in set :\
Sets can only contain unique values, any attempt to add a value that already exists will be ignored.

```javascript
set.add('item1')
set.add('item2')
set.add('item3')
set.add('item1') // Set will still contain 3 unique values
```

Set has many of the same methods and properties as Map, including `delete()`, `has()`, `clear()`, and `size`.

### 8. Difference between Array and Map?

Answer- Array has default indexing scheme start from 0 while in map we define keys and values in map.

```javascript
const array=['zero','one','two','three']

const map = new Map([[ 1, 'one' ],[ 2, 'two' ]]);

// array of objects
array.find(object => object.id === 2); // returns object with id 2
//array of numbers starting from "zero"
array.indexOf("one"); // returns 1 as index

map.get(1) // returns 'one'

```

### 9. What are array methods? List a few names?

Answer- javascript array methods:

* `map()` : This method creates a new array with the results of calling a provided function on every element in this array.

* `filter()` : This method creates a new array with only elements that passes the condition inside the provided function

* `sort()` : This method is used to arrange/sort array’s elements either in ascending or descending order.

* `forEach()` : This method helps to loop over array by executing a provided callback function for each element in an array.

* `concat()` : This method is used to merge two or more arrays and returns a new array, without changing the existing arrays.

* `every()` : This method checks every element in the array that passes the condition, returning true or false as appropriate.

* `some()` : This method checks if at least one element in the array that passes the condition, returning true or false as appropriate.

* `includes()` : This method checks if an array includes the element that passes the condition, returning true or false as appropriate.

* `join()` : This method returns a new string by concatenating all of the array’s elements separated by the specified separator.

* `reduce()` : This method applies a function against an accumulator and each element in the array to reduce it to a single value.

* `find()` : This method returns the value of the first element in an array that pass the test in a testing function.

* `findIndex()` : This method returns the index of the first element in an array that pass the test in a testing function.

* `indexOf()` : This method returns the index of the first occurrence of the specified element in the array, or -1 if it is not found.

* `fill()` : This method fills the elements in an array with a static value and returns the modified array.

* `slice()` : This method returns a new array with specified start to end elements.

* `reverse()` : This method reverses an array in place. Element at last index will be first and element at 0 index will be last.

* `push()` : This method adds one or more elements to the end of array and returns the new length of the array.

* `pop()` : This method removes the last element from the end of array and returns that element.

* `shift()` : This method removes the first element from an array and returns that element.

* `unshift()` : This method adds one or more elements to the beginning of an array and returns the new length of the array.

### 10. In how many ways can we traverse through an array in Javascript?

Answer- There are three common ways we traverse an array in javascript.

* 1. for loop
* 2. for/of loop
* 3. forEach loop

see the examples:

#### for loop

```javascript
//First Variant

const website = ["Myweb"]

for (let i = 0; i < website.length; i++) {
    console.log(webiste[i])
}


//Second Variant

const website = ["Myweb"]

for (let i = 0; len = website.length; i < len; i++) {
    console.log(webiste[i])
}


//Third Variant

const website = ["Myweb"]

for (let i = website.length - 1; i >= 0; i--) {
    console.log(webiste[i])
}
```

#### 2. for / of loop

```javascript
// First Variant

const website = ["Myweb"]

for ( let character of website ) {
    console.log(character)
}

// Second Variant

const website = ["Myweb"]

for ( let [index, character] of website.entries() ) {
    if( index % 2 === 0 ) console.log(character)   // console only Even Index Values
}
```

#### 3. forEach() Method

```javascript
const website = [..."Myweb"]. //Array of characters

const uppercaseWebsite = ''

website.forEach(character => {
    uppercaseWebsite += character.toUpperCase()
})
```
