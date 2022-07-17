# Assignment -03 Day -06

## Theory

### 1. Explain as much as you know about objects in javascript? (A long answer expected)

Answer- The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the `Object()`.

creating javascript object:

```javascript
const car = {type:"Fiat", model:"500", color:"white"};
```

#### Accessing Object Properties

You can access object properties in two ways:

```javascript
//objectName.propertyName
car.color // white
```

OR

```javascript
//objectName["propertyName"]
car['color'] // white
```

#### Object Methods

Objects can also have methods.

A method is a function stored as a property.

example (here `fullName`):

```javascript
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```

In JavaScript, the `this` keyword refers to an object.

In the example above, `this` is the person object that "owns" the fullName function.In other words, `this.firstName` means the firstName property of this object.

#### Accessing Object Methods

```javascript
//objectName.methodName()

person.fullName()
```

If you access a method without the () parentheses, it will return the function definition:

```javascript
const fun = person.fullName
```

The Object constructor creates an object wrapper for the given value.

If the value is `null` or `undefined`, it will create and return an empty object.
If the value is an object already, it will return the value.
Otherwise, it will return an object of a Type that corresponds to the given value.
When called in a non-constructor context, Object behaves identically to `new Object()`.

#### Constructor

`Object()` : Creates a new Object object. It is a wrapper for the given value.

#### Static methods

`Object.assign()` : Copies the values of all enumerable own properties from one or more source objects to a target object.

`Object.create()` : Creates a new object with the specified prototype object and properties.

`Object.defineProperty()` : Adds the named property described by a given descriptor to an object.

`Object.defineProperties()` : Adds the named properties described by the given descriptors to an object.

`Object.entries()` : Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.

`Object.freeze()` : Freezes an object. Other code cannot delete or change its properties.

`Object.fromEntries()` : Returns a new object from an iterable of [key, value] pairs. (This is the reverse of Object.entries).

`Object.getOwnPropertyDescriptor()` : Returns a property descriptor for a named property on an object.

`Object.getOwnPropertyDescriptors()` : Returns an object containing all own property descriptors for an object.

`Object.getOwnPropertyNames()` : Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.

`Object.getOwnPropertySymbols()` : Returns an array of all symbol properties found directly upon a given object.

`Object.getPrototypeOf()` : Returns the prototype (internal [[Prototype]] property) of the specified object.

`Object.is()` : Compares if two values are the same value. Equates all NaN values (which differs from both IsLooselyEqual used by == and IsStrictlyEqual used by ===).

``Object.isExtensible()` : Determines if extending of an object is allowed.

`Object.isFrozen()` : Determines if an object was frozen.

`Object.isSealed()` : Determines if an object is sealed.

`Object.keys()` : Returns an array containing the names of all of the given object's own enumerable string properties.

`Object.preventExtensions()` : Prevents any extensions of an object.

`Object.seal()` : Prevents other code from deleting properties of an object.

`Object.setPrototypeOf()` : Sets the object's prototype (its internal [[Prototype]] property).

`Object.values()` : Returns an array containing the values that correspond to all of a given object's own enumerable string properties.

#### Instance properties

`Object.prototype.constructor` : Specifies the function that creates an object's prototype.

`Object.prototype.__proto__` : Points to the object which was used as prototype when the object was instantiated.

#### Instance methods

`Object.prototype.__defineGetter__()` : Associates a function with a property that, when accessed, executes that function and returns its return value.

`Object.prototype.__defineSetter__()` : Associates a function with a property that, when set, executes that function which modifies the property.

`Object.prototype.__lookupGetter__()` : Returns the function associated with the specified property by the __defineGetter__() method.

`Object.prototype.__lookupSetter__()` : Returns the function associated with the specified property by the __defineSetter__() method.

`Object.prototype.hasOwnProperty()` : Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.

`Object.prototype.isPrototypeOf()` : Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.

`Object.prototype.propertyIsEnumerable()` : Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set.

`Object.prototype.toLocaleString()` : Calls toString().

`Object.prototype.toString()` : Returns a string representation of the object.

`Object.prototype.valueOf()` : Returns the primitive value of the specified object.

#### Using Object given undefined and null types

The following examples store an empty Object object in o:

```javascript
let o = new Object()
```

```javascript
let o = new Object(undefined)
```

```javascript
let o = new Object(null)
```

Since JavaScript doesn't exactly have sub-class objects, prototype is a useful workaround to make a "base class" object of certain functions that act as objects. For example:

```javascript
const Person = function(name) {
  this.name = name;
  this.canTalk = true;
};

Person.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name);
  }
};

const Employee = function(name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; //If you don't set Object.prototype.constructor to Employee,
                                           //it will take prototype.constructor of Person (parent).
                                           //To avoid that, we set the prototype.constructor to Employee (child).

Employee.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name + ', the ' + this.title);
  }
};

const Customer = function(name) {
  Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer; //If you don't set Object.prototype.constructor to Customer,
                                           //it will take prototype.constructor of Person (parent).
                                           //To avoid that, we set the prototype.constructor to Customer (child).

const Mime = function(name) {
  Person.call(this, name);
  this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime; //If you don't set Object.prototype.constructor to Mime,
                                   //it will take prototype.constructor of Person (parent).
                                   //To avoid that, we set the prototype.constructor to Mime (child).

const bob = new Employee('Bob', 'Builder');
const joe = new Customer('Joe');
const rg = new Employee('Red Green', 'Handyman');
const mike = new Customer('Mike');
const mime = new Mime('Mime');

bob.greet();
// Hi, I am Bob, the Builder

joe.greet();
// Hi, I am Joe

rg.greet();
// Hi, I am Red Green, the Handyman

mike.greet();
// Hi, I am Mike

mime.greet();
```

### 2. Read the code

``` text
// This is an object based vector template
var vector = {
_x: 0,
_y: 0,
create: function(x,y){
var obj = Object.create(this);
obj.setX(x);
obj.setY(y);
return obj;
},
}
```

Can you make a “class” based alternative to it? Using Javascript OOP features.

Answer- code:

```javascript
var vector = {
_x: 0,
_y: 0,
create: function(x,y){
var obj = Object.create(this);
obj.setX(x);
obj.setY(y);
return obj;
},

setX: function(value) {
    this._x = value;
},

setY: function(value) {
    this._y = value;
}

}



const var1 = vector.create(1,2)

console.log(var1)
var1.setX(5)
console.log(var1)



class Vector {
    constructor(x, y) {
      this._x = 0;
      this._y = 0;

      this.setX = function (value){
        this._x=value
      }

      
      this.setY = function (value){
        this._y=value
      }


      this.setX(x);
      this.setY(y);
    
    }
  }

const myvar= new Vector(1,2);
console.log(myvar)
myvar.setX(5)
console.log(myvar)
```

### 3. Do you think javascript is the language of the future?

Answer- JavaScript is the main powerhouse behind the rapidly evolving Internet. It is the present and will be the future. The rampant development of the high-level programming language asserts to the fact of JavaScript is the future.

Well, here are some reasons supporting the notion:

* Empowers Over 95% of The Web – As of today 95.1% of the Internet is powered by JavaScript. The stats are likely to increase in the near future.

* Excellent Choice of Frameworks – AngularJS, Ember.js Metero.js, ReactJS, and VueJS are just a few of the wide variety of frameworks available for JavaScript

* Superfast – ECMAScript 6 and related technologies are developed for modern web requirements, where speed is a must..

* Readily Available Packages – There is a package for almost everything you can think of. In fact, npm is the world’s largest software registry with a total of over 800,000 build blocks. So, the possibilities of creating with JavaScript are simply immense.
