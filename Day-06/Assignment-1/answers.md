1. What is JavaScript?
Answer- Javascript is a dynamically typed, object oriented and lightweight programming language.

2. What is the difference between b/w let and var?
Answer- let keyword creates block and function scoped ( can-not be used outside the scope of block and function. ) while var creates globally scoped or function scoped variable.
let does not allow redeclaration of variable in current scope (gives syntax error on redeclaring )while var allows redeclaration of variables.
let Does not Allow Hoisting.
see:
console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
let num = 6; // Initialization

3. Why do we prefer const over var?
Answer- const does not allow to change variable refrence after declaration while var allows it.
var declarations are globally scoped or function scoped while const are block scoped.

4. What is the use of javascript in web browsers?
Answer- javascript creates the dynamic functionality in static html and css website using DOM manipulation.

5. What are Objects?
Answer- objects has some properties and its type.

6. What is an array and how is it different from an Object in Javascript?
Answer- Arrays is also an object in javascript.The major difference is that array store the data in an ordered collection in which the data can be accessed using a numerical index.

7. What is a function?
Answer- function is used for code reusablity.

8. How can we implement call by value and call by reference in Javascript?
Answer- primitives call a function by its value while non-primitives call the function by reference.

//call by value
    var a = 5;
    var b;
    b = a;
    a = 3;
    console.log(a);
    console.log(b);

//call by refrence
var c = { greeting : 'Hello' };
    var d;
    d = c;
  
    // Mutating the value of c 
    c.greeting = 'Hello World!';
    console.log(c);
    console.log(d);
    
   

9. What are the primitive data types in Javascript?
Answer-
Number
String
Boolean
Undefined
Null

10. What is DOM?
Answer- The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web.

11. Why do we need DOM?
Answer- DOM is useful for change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

