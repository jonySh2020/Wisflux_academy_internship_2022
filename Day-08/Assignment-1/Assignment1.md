## Assignment 1 Day-08 2022-07-13


###1. What are the basic data types in TypeScript?\
Answer- JavaScript has three very commonly used primitives: string, number, and boolean.\
string represents string like : `"Hello World!"`\
numbers can be integers like : `23` or floating point numbers like : `23.24`\
boolean value is like:  `true` or `false`.\

####Arrays\ 
to define type of array like : [1,2,3] we can use type like `number[]`\
similarly we can use `string[]` for string array.\

#####any\
TypeScript also has a special type, any, that we can use whenever we don’t want a particular value to cause typechecking errors.\



###2. What is Generic data type.\
Answer- A generic type is a way of reusing part of a given type. It helps to capture the type T passed in as a parameter.\
```
function showType<T>(args: T) {
  console.log(args)
}

showType("test")
// Output: "test"

showType(1)
// Output: 1
```
To construct a generic type, you need to use the brackets and pass T as a parameter.\
Here, I use T (the name is up to you) and then, call the function showType twice with different type annotations because it's generic - it can be reused.\
```
interface GenericType<T, U> {
  id: T
  name: U
}

function showType(args: GenericType<number, string>) {
  console.log(args)
}

showType({ id: 1, name: "test" })
// Output: {id: 1, name: "test"}

function showTypeTwo(args: GenericType<string, string[]>) {
  console.log(args)
}

showTypeTwo({ id: "001", name: ["This", "is", "a", "Test"] })
// Output: {id: "001", name: Array["This", "is", "a", "Test"]}
```


###3. What is type inferring in TS.\
Answer-Typescript tries to infer the type if you do not specify one, by determining the type of the initial value assigned to it or based on its usage.\

There are two ways types are inferred in Typescript. One is explicit and the other one is implicit\

Explicit Typing is when we just declare the variable with the types.
``` 
let numVar: number;
let numbers: number[] = [1,2,3]
```
In Implicit typing, we do not declare the types. Typescript makes an attempt to deduce the type from its usage.

```
let numVar=100;    // No Data type is specifed. The typescript will  
                   // Infer the variable as number   
 
numVar = "Hello World";    //Error is thrown here
console.log(numVar); 
```

The Typescript infers or determines that the initial value is a number, hence infers the numVar as the number.\


If no implicit type is specified or value is assigned, then typescripts infer it as any.
```
let x           // This is inferred as any
x = 100         // No Error here
x = "Hi"        // No Error here either
```




###4. What are the possible ways to define typing for functions.\
Answer- Here are some examples to show different possible ways of typing in TS function.

// the `: number` here specifies that this function returns a number
```
function getTime(): number {
  return new Date().getTime();
}
```
he type `void` can be used to indicate a function doesn't return any value.
```
function printHello(): void {
  console.log('Hello!');
}
```

Function parameters are typed with a similar syntax as variable declarations.
```
function multiply(a: number, b: number) {
  return a * b;
}
```
* Optional Parameters
By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.

// the `?` operator here marks parameter `c` as optional
```
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
```

For parameters with default values, the default value goes after the type annotation: example `exponent: number = 10`.\

* Named Parameters
Typing named parameters follows the same pattern as typing normal parameters.

Example\
```
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}
```
* Rest Parameters\
Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays like:` ...rest: number[]` .\

* Type Alias
Function types can be specified separately from functions with type aliases.\

Example\
```
type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;
```


###5. How to define Generic type for Classes
Answer- A generic class has a generic type parameter list in an angle brackets <> that follows the name of the class.\
```
class className<T>{
    //... 
}
```
TS allows you to have multiple generic types in the type parameter list. For example:

```
class className<K,T>{
    //...
}
```

The generic constraints are also applied to the generic types in the class:
```
class className<T extends TypeA>{
    //...
}
```
The following shows a complete generic Stack class called Stack<T>:
```
class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);

    }
    pop(): T {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    }
}

