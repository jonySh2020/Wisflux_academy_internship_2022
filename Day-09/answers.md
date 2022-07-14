# Assignment Day -09

## Theory -

### 1. What is NodeJS?

Answer- Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

### 2. What is V8 Engine?

Answer- V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome.

V8 is the JavaScript engine i.e. it parses and executes JavaScript code. The DOM, and the other Web Platform APIs (they all makeup runtime environment) are provided by the browser.

The cool thing is that the JavaScript engine is independent of the browser in which it's hosted. This key feature enabled the rise of Node.js. V8 was chosen to be the engine that powered Node.js back in 2009, and as the popularity of Node.js exploded, V8 became the engine that now powers an incredible amount of server-side code written in JavaScript.

### 3. What is Event Loop in NodeJS

Answer- Event loop explains how Node.js can be asynchronous and have non-blocking I/O.

The Node.js JavaScript code runs on a single thread. There is just one thing happening at a time. This is a limitation that's actually very helpful, as it simplifies a lot how you program without worrying about concurrency issues.

Programmer just need to pay attention to how he/she write code and avoid anything that could block the thread, like synchronous network calls or infinite loops.

In general, in most browsers there is an event loop for every browser tab, to make every process isolated and avoid a web page with infinite loops or heavy processing to block your entire browser.

The environment manages multiple concurrent event loops, to handle API calls for example. Web Workers run in their own event loop as well.

You mainly need to be concerned that your code will run on a single event loop, and write code with this thing in mind to avoid blocking it.

#### Blocking the event loop

Any JavaScript code that takes too long to return back control to the event loop will block the execution of any JavaScript code in the page, even block the UI thread, and the user cannot click around, scroll the page, and so on.

Almost all the I/O primitives in JavaScript are non-blocking. Network requests, filesystem operations, and so on. Being blocking is the exception, and this is why JavaScript is based so much on callbacks, and more recently on promises and async/await.

#### The call stack

The call stack is a LIFO (Last In, First Out) stack.

The event loop continuously checks the call stack to see if there's any function that needs to run. While doing so, it adds any function call it finds in the call stack and executes each one in order.

#### A simple event loop explanation

``` javascript
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  bar()
  baz()
}

foo()
```

When this code runs, first `foo()` is called. Inside `foo()` we first call `bar()`, then we call `baz()`.

At this point the call stack looks like this:

![image : call stack of above program. ]('https://nodejs.dev/static/270ebeb6dbfa7d613152b71257c72a9e/fcda8/call-stack-first-example.png')

The event loop on every iteration looks if there's something in the call stack, and executes it:

![image : Event loop on every iteration. ]('https://nodejs.dev/static/ca404c319c6fc595497d5dc097d469ff/fc1a1/execution-order-first-example.png')

### 4. What is the use of tsconfig.json file?

Answer- The presence of a `tsconfig.json` file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project.

#### Using tsconfig.json

* By invoking tsc with no input files, in which case the compiler searches for the `tsconfig.json` file starting in the current directory and continuing up the parent directory chain.

* By invoking tsc with no input files and a --project (or just -p) command line option that specifies the path of a directory containing a tsconfig.json file, or a path to a valid .json file containing the configurations.

When input files are specified on the command line, `tsconfig.json` files are ignored.

#### Examlple tsconfig.json

* using  `files` property

Specifies an allowlist of files to include in the program. An error occurs if any of the files can’t be found.

``` typescript
 "files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    ]
}
```

* `include` property

Specifies an array of filenames or patterns to include in the program. These filenames are resolved relative to the directory containing the `tsconfig.json` file.

```typescript
{
  "include": ["src/**/*", "tests/**/*"]
}
```

### 5. What are the methods provided by `fs` module to manipulate files?

Answer- we can use fs by requiring it.

```javascript
const fs = require('fs');
```

Once you do so, you have access to all its methods, which include:

* `fs.access()`: check if the file exists and Node.js can access it with its permissions
* `fs.appendFile()`: append data to a file. If the * file does not exist, it's created
* `fs.chmod()`: change the permissions of a file specified by the filename passed. Related: fs.lchmod(), fs.fchmod()
* `fs.chown()`: change the owner and group of a file specified by the filename passed. Related: * fs.fchown(), fs.lchown()
* `fs.close()`: close a file descriptor
* `fs.copyFile()`: copies a file
* `fs.createReadStream()`: create a readable file stream
* `fs.createWriteStream()`: create a writable file stream
* `fs.link()`: create a new hard link to a file
* `fs.mkdir()`: create a new folder
* `fs.mkdtemp()`: create a temporary directory
* `fs.open()`: opens the file and returns a file descriptor to allow file manipulation
* `fs.readdir()`: read the contents of a directory
* `fs.readFile()`: read the content of a file. Related: fs.read()
* `fs.readlink()`: read the value of a symbolic link
* `fs.realpath()`: resolve relative file path pointers (., ..) to the full path
* `fs.rename()`: rename a file or folder
* `fs.rmdir()`: remove a folder
* `fs.stat()`: returns the status of the file identified by the filename passed. Related: fs.fstat(), fs.lstat()
* `fs.symlink()`: create a new symbolic link to a file
* `fs.truncate()`: truncate to the specified length the file identified by the filename passed. Related: fs.ftruncate()
* `fs.unlink()`: remove a file or a symbolic link
* `fs.unwatchFile()`: stop watching for changes on a file
* `fs.utimes()`: change the timestamp of the file identified by the filename passed. Related: fs.futimes()
* `fs.watchFile()`: start watching for changes on a file. Related: fs.watch()
* `fs.writeFile()`: write data to a file. Related: fs.write()

One peculiar thing about the `fs` module is that all the methods are asynchronous by default, but they can also work synchronously by appending `Sync`.

### 6. What is API?

Answer- Application Programming Interface (API) is a software interface that allows two applications to interact with each other without any user intervention. API is a collection of software functions and procedures. In simple terms, API means a software code that can be accessed or executed. API is defined as a code that helps two different software’s to communicate and exchange data with each other.

It offers products or services to communicate with other products and services without having to know how they’re implemented.

### 7. What is JSON format?

Answer- A JSON file is a file that stores simple data structures and objects in JavaScript Object Notation (JSON) format, which is a standard data interchange format. It is primarily used for transmitting data between a web application and a server. JSON files are lightweight, text-based, human-readable, and can be edited using a text editor.

Example :

```json
{{
  "first_name": "Rajeev",
  "last_name": "Sharma",
  "email_address": "rajeev@ezeelive.com",
  "is_alive": true,
  "age": 30,
  "height_cm": 185.2,
  "billing_address": {
    "address": "502, Main Market, Evershine City, Evershine, Vasai East",
    "city": "Vasai Raod, Palghar",
    "state": "Maharashtra",
    "postal_code": "401208"
  },
  "shipping_address": {
    "address": "Ezeelive Technologies, A-4, Stattion Road, Oripada, Dahisar East",
    "city": "Mumbai",
    "state": "Maharashtra",
    "postal_code": "400058"
  },
  "phone_numbers": [
   {
   "type": "home",
   "number": "9975666694"
   },
   {
   "type": "office",
   "number": "9822117730"
   }
 ],
 "date_of_birth": null
}
```

### 8. Why we use JSON format for API?

Answer- Advantages of JSON:

* JSON is Faster:
JSON syntax is very easy to use. We have to use only -> as a syntax which provides us an easy parsing of the data and faster execution of the data.

* Schema Support:

It has the wide range of supported browser compatibility with the operating systems so the applications made with the coding of JSON doesn’t require much effort to make it all browser compatible. During development, the developer thinks for the different browsers but JSON provides that functionality.

* Server Parsing:

On the server side parsing is the important part that developers want if the parsing will be fast on the server side then the only user can get the fast response of their response so in this case JSON server-side parsing is the strong point that indicates us to use the JSON on the server side.

* Tool for sharing data:
JSON is the best tool for the sharing data of any size even audio, video etc. This is because JSON stores the data in the arrays so data transfer makes easier. For this reason, JSON is a superior file format for web APIs and for web development.

### 9. What is a Framework?

Answer- In computer programming, a software framework is an abstraction in which software, providing generic functionality, can be selectively changed by additional user-written code, thus providing application-specific software. It provides a standard way to build and deploy applications and is a universal, reusable software environment that provides particular functionality as part of a larger software.

Software frameworks may include support programs, compilers, code libraries, toolsets, and application programming interfaces (APIs) that bring together all the different components to enable development of a project or system.

Frameworks have key distinguishing features that separate them from normal libraries:

* inversion of control: In a framework, unlike in libraries or in standard user applications, the overall program's flow of control is not dictated by the caller, but by the framework. This is usually achieved with the Template Method Pattern.

* extensibility: A user can extend the framework – usually by selective overriding – or programmers can add specialized user code to provide specific functionality.

* non-modifiable framework code: users can extend the framework, but cannot modify its code.

### 10. How an HTTP Communication works

Answer- HTTP is an application layer protocol built on top of TCP that uses a client-server communication model. HTTP clients and servers communicate through request and response messages. The three main HTTP message types are GET, POST, and HEAD.

* HTTP GET: Messages sent to a server contain only a URL. Zero or more optional data parameters may be appended to the end of the URL. The server processes the optional data portion of the URL, if present, and returns the result (a web page or element of a web page) to the browser.

* HTTP POST: Messages place any optional data parameters in the body of the request message rather than adding them to the end of the URL.

* HTTP HEAD: Requests work the same as GET requests. Instead of replying with the full contents of the URL, the server sends back only the header information (contained inside the HTML section).

An HTTP GET message.
The browser initiates communication with an HTTP server by initiating a TCP connection to the server. Web browsing sessions use server port 80 by default, although other ports such as 8080 are sometimes used instead.

After a session is established, you trigger the sending and receiving of HTTP messages by visiting the web page.

HTTP is what's called a stateless system. This means that, unlike other file transfer protocols such as FTP, the HTTP connection is dropped after the request completes. So, after your web browser sends the request and the server responds with the page, the connection closes.

### 11. What is Middleware in ExpressJS

Answer- Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

`Middleware` functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

* Execute any code.
* Make changes to the request and the response objects.
* End the request-response cycle.
* Call the next middleware function in the stack.

 If the current middleware function does not end the  request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

An Express application can use the following types of middleware:

* Application-level middleware
* Router-level middleware
* Error-handling middleware
* Built-in middleware
* Third-party middleware
