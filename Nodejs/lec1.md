<details>
    <summary>Lecture 1-5</summary>

    Node.js is a JS runtime environment (when you type `node` in the terminal, you enter Node.js and can execute JavaScript, which is why Node.js is a JS runtime environment), built on top of Chrome's V8 engine.  
    => Cross-platform (runs on Windows, Linux, etc.)  
    => Open-source (by the OpenJS Foundation)  
    => JS runtime environment  
    => Runs on the V8 engine, executing outside the web browser  
    => Initially, JavaScript was confined to running inside web browsers (frontend), but with Node.js, it runs outside browsers (backend)  
    => Event-driven architecture  
    => Capable of asynchronous I/O (non-blocking I/O)  

    Thread vs. Multithread:  
    - Thread is a container that can run a program separately.  
    - Multithread is a container that can run programs together, sharing the same memory and resources.  
    - JavaScript is synchronous and single-threaded.
</details>

<details>
    <summary>History of Node.js</summary>

    - Node.js was created in 2009 by Ryan Dahl.
    - ⏳ **2009 (Born)**: Initially, Ryan used the SpiderMonkey engine (from Firefox), but switched to Chrome's V8 engine after two days.
    - Ryan originally named it WebJS but renamed it Node.js due to its potential.
    - A company called **Joyent** funded Ryan’s project, and Node.js was born.
    - ⏳ **2010 (npm comes)**: The **npm** (Node Package Manager) registry was introduced, making it easier to manage packages.
    - ⏳ **2011 (Windows support)**: Windows support was introduced, thanks to collaboration between Joyent and Microsoft.
    - ⏳ **2012 (Ryan left Node.js)**: Isaac Schlueter took over, but with rapid updates to the V8 engine, Node.js had challenges keeping up.
    - ⏳ **2014 (Fork of Node.js)**: Fedor Forked Node.js into io.js, leading to a controversial split.
    - ⏳ **2015 (Node.js Foundation)**: The Node.js Foundation was created, a committee to manage Node.js development.
    - ⏳ **2019 (OpenJS Foundation)**: The Node.js Foundation merged with the JS Foundation to form the OpenJS Foundation.

</details>

<details>
    <summary>Node.js Timeline</summary>
    |----------|------------|-------------------|---------------------------------|-------------------------|---------------------------------|---------------|
    | 2009     | 2010       | 2011              | 2012                            | 2014                    | 2015                            | 2019          |
    | BORN     | NPM COMES  | WINDOW SUPPORT     | RYAN LEFT NODEJS PROJECT       | FEDOR FORKED NODEJS      | NODEJS FOUNDATION (A COMMITTEE) | OPENJS FOUNDATION (COMMITTEE) |
</details>

<details>
    <summary>NODE JS - ON SERVER</summary>

    **Server**: A remote computer (CPU) that works remotely.

    - You type "google.com" in the browser.
    - The browser checks its local cache.
    - The OS checks its DNS cache.
    - The browser sends a query to the recursive DNS resolver.
    - The resolver asks the root DNS servers for the `.com` TLD nameservers.
    - The resolver asks the `.com` TLD nameservers for Google's authoritative DNS servers.
    - The resolver asks Google’s authoritative DNS servers for the IP address of "google.com".
    - The authoritative DNS server responds with the IP address of "google.com".
    - The recursive resolver sends the IP address to the browser.
    - The browser makes an HTTP/HTTPS request to the server at the IP address.
    - The server processes the request and sends back the web content.
    - The browser renders the page.
    - The DNS records are cached for future use.
</details>

<details>
    <summary>Node.js & V8 Engine</summary>

    Node.js is a C++ application with V8 embedded into it.  
    JS Engine (V8) is in C++ ([GitHub link to V8](https://github.com/v8/v8)). V8 can be embedded into any C++ application, and V8 is used to execute JavaScript.

    - When you write JS code → it's read by V8 (which is in C++) → converted into machine code.
  
    ### When V8 executes JS, why do we need Node.js?
    - V8 is a JavaScript engine that follows **ECMAScript** (a standard for scripting languages, e.g., rules for `let`, `var`, `const`).
    - Every engine has its own standards; V8 follows ECMAScript, and **ES6** is the 6th version of ECMAScript.
    - V8 can't go beyond ECMAScript, so Node.js gives it superpowers (APIs on the server).
    - So, **V8 + superpowers = Node.js** (e.g., if you want to connect to a database through JS, send HTTP requests, fetch images, then Node.js comes into play).

    ### Node.js Flow:
    - **JS code** → read by **V8** → converted into **machine code** → execution.
</details>

<details>
    <summary>Interview Question: Window in Node.js</summary>
    
    **In Node.js:**
    - `window` is **global**.
    - `window === this === self === frames` in the browser, but in Node.js, `this` gives you an empty object `{}`.
    - In Node.js, `global === globalThis` and `this` is `{}`.
    - **Self**, **frame**, and **window** don't exist in Node.js.
    - **In 2020**, `globalThis` became the standard.

</details>

<details>
    <summary>Module System in Node.js</summary>

    **require():** Helps you import another module inside the current module.

    - Methods, functions, and variables can't be accessed simply by `require()`. You need to **export** them first.
    - This is because Node.js modules **protect their variables and functions** from leaking.
</details>


<details>
    <summary>Exports and Imports in CommonJS</summary>
    
    **1) Destructuring Imports with Custom Names:**
    - If you want to assign any custom name to the imported function, you can use the `require()` method like this:
      ```javascript
      // Import
      const koio = require("./sum");
      koio();
      ```
      ```javascript
      // Export
      module.exports = calculate;
      ```

    **2) Exporting Multiple Functions with the Same Key Name:**
    - If you export multiple functions and values, their names in the import and export should match:
      ```javascript
      // Import
      const koio = require("./sum");
      koio.calculateSums(a, b);
      ```
      ```javascript
      // Export
      module.exports = {
          calculateSums: calculateSum,
          calculateDiff: calculateDiff,
          str: str
      };
      ```

    **3) Destructuring Import with Same Key Names:**
    - Using destructuring imports when the keys are the same:
      ```javascript
      // Import
      const { str, calculateSums, calculateDiff } = require("./sum");
      ```
      ```javascript
      // Export
      module.exports = {
          calculateSums: calculateSum,
          calculateDiff: calculateDiff,
          str: str
      };
      ```

    **4) Simplified Export/Import if the Key Names are Identical:**
    - If the variable names are the same in both the exported and imported modules, you can simplify:
      ```javascript
      // Import
      const { str, calculateSum, calculateDiff } = require("./sum");
      ```
      ```javascript
      // Export
      module.exports = {
          calculateSum,
          calculateDiff,
          str
      };
      ```

    **5) Util Module in CommonJS:**
    - You can import the `util` module like this:
      ```javascript
      const util = require("node:util");
      ```

    **6) Importing JSON:**
    - When importing JSON files, there's no need to explicitly use `module.exports` in your export.
    
</details>

<details>
    <summary>Exports and Imports in ES Modules</summary>

    **1) Import and Export with Same Name:**
    - In ES Modules, the name of the imported/exported variables must be the same:
      ```javascript
      // Import
      import { calculateSum } from "./sum";
      ```
      ```javascript
      // Export
      export function calculateSum() { ... }
      ```

    **2) Import with Renaming:**
    - If you want to change the name while importing, you can use `as` to rename it:
      ```javascript
      // Import
      import { calculateSum as cs } from "./sum";
      cs();
      ```
      ```javascript
      // Export
      export function calculateSum() { ... }
      ```

    **Note:** In both CommonJS and ES Modules, if you import using destructuring, the imports come in as `const`, so you can't reassign them later.

</details>

<details>
    <summary>Private Members and Permissions Between Modules</summary>
    
    - In both CommonJS and ES Modules, you can use **private members** from another module, but only if the other module gives you permission (i.e., they explicitly export them).

</details>

<details>
    <summary>CommonJS vs ES Module</summary>
    
    | **Feature**                              | **CommonJS**                                                                 | **ES Module**                                                                |
    |------------------------------------------|----------------------------------------------------------------------------|----------------------------------------------------------------------------|
    | **Type Declaration**                     | `"type": "commonjs"`                                                         | `"type": "module"`                                                           |
    | **Exporting Methods/Functions**          | `module.exports = function abc() { ... };`                                   | `export function abc() { ... }`                                              |
    | **Importing Methods/Functions**          | `const abc = require("./");`                                                 | `import { abc } from "./";`                                                  |
    | **Import with Renaming**                 | N/A (Renaming typically done manually)                                        | `import { abc as a } from "./";`                                             |
    | **Default Usage**                        | By default used in **Node.js**                                               | By default used in **React** and **Angular**                                 |
    | **Historical Context**                   | Older way of defining modules                                               | Newer way and could become standard in future                               |
    | **Synchronous/Asynchronous Loading**     | Modules are **required synchronously** (blocking)                            | Modules are **loaded asynchronously** (non-blocking)                        |
    | **Strict Mode**                          | Code runs in **non-strict mode**                                             | Code runs in **strict mode** by default                                      |
    | **Enabling ES Modules**                  | ES modules are not enabled by default, CommonJS is default                   | ES modules enabled by adding `"type": "module"` to `package.json`            |
    | **Importing Core Node.js Modules**       | `require("crypto");`                                                         | `import "node:crypto";` (using Node.js core modules)                         |

    Enabling  ES module, by default common js module is enabled
    1) if u have then good or else create package.json and change type :"module"
    2)require("crypto") is = to require("node:crypto") //bcz it is core modules of nodejs
</details>


  <details>
    <summary>Module Exports and IIFE in Node.js 🌟</summary>
    
    ## Introduction 📚
    In Node.js, modules are created using `module.exports`. But why do we need this? Let's dive in! 🤔

    ### IIFE (Immediately Invoked Function Expression) 🚀
    When we create a module in Node.js, it wraps our code in an IIFE. This means that our code is executed immediately when the module is loaded.

    ```javascript
    function name() {
        let a = 2;
        console.log(a); // a is defined only within this function
    }
    console.log(a); // ReferenceError: a is not defined
    ```

    🔴 **Important**: Variables defined within a function are only accessible within that function.

    ### Why Module Exports? 🤔
    `module.exports` is used to create modules in Node.js. When we use `require` to import a module, Node wraps the code in an IIFE and passes it to the V8 engine.

    - With **exports**, you're adding to what's already there.
    - With **module.exports**, you're replacing it entirely.

    Example:

    ```javascript
    (function () {
        let arr = ["all code of module resides here"];
        console.log(arr);
    })();
    ```

    🔯 **The use of module.exports and IIFE enhances encapsulation and variable privacy**.

    📝 **Note**: Node.js wraps our code in an IIFE, which is then executed by the V8 engine.

    ## Module Wrap 📦
    The `wrapper` array contains the code that wraps our module:

    ```javascript
    const wrapper = ['(function (modules, require, exports, __filename, __dirname) {', '\n}'];
    ```

    ## Module Execution 🔍
    Here's how Node.js executes our module:

    1. **Resolving the module**: Checking global, local, JSON path, util path, etc.
    2. **Loading the module**: Retrieving the file content.
    3. **Compiling**: Wrapping the code in an IIFE using the `wrapper` array.
    4. **Code evaluation**: Executing the module code.
    5. **Caching**: Caching the module to avoid repeated execution.

    💡 **Example**:

    ```javascript
    (function (modules, require, exports, __filename, __dirname) {
        console.log(globalThis);
        function calculateSum(a, b) {
            console.log("Your first value is:", a);
            console.log("Your second value is:", b);
            console.log("a + b =", a + b);
        }
    })(modules);
    ```

    ## Detailed: The Module Loading Process 🔄
    ### Resolving the Module 🧭
    - **Check Locations**: Node searches for the module in various locations, including:
        - Built-in modules (like `fs`, `http`)
        - Local files or directories
        - Node modules in the `node_modules` folder
    - **File Paths**: Supports relative paths (`./`) and absolute paths.

    ### Loading the Module 📂
    - Retrieves the file content, reads it, and prepares for execution.

    ### Compiling the Module 🔄
    - The code is wrapped in an IIFE using the `wrapper` array, allowing Node.js to maintain the module scope.

    ```javascript
    const wrapper = [
        '(function (modules, require, exports, __filename, __dirname) {',
        '\n}'
    ];
    ```

    ### Code Evaluation 🏗️
    - The module's code is executed inside the IIFE, making use of the provided `require`, `exports`, and other parameters.

    ### Caching Mechanism 💾
    - After loading a module, Node caches the result. Subsequent `require` calls for the same module return the cached version, improving performance by avoiding repeated loading and execution.

    ## Node.js Internals 🤯
    - In the **Node.js GitHub repository**:
        - `v8` folder handles V8-related work.
        - `lib` folder handles most of the JavaScript-related work.
        - `lib/internals/modules/helper.js` handles the `require` function.

    ## 📚 Resources:
    - Node.js GitHub repository: [https://github.com/nodejs/node](https://github.com/nodejs/node)
    - V8 engine documentation: [https://v8.dev/](https://v8.dev/)

</details>


# SOMETHING EXTRA

## C++ Compilation Process

**cpp**: 
`cpp code` -> **Preprocessing(GCC)** -> **Compiling(GCC)** [translate into assembly code [mov x]] -> **Assembler** [translate assembly code to machine code [0, 1]] -> **Linking** [take the libraries, call the functions [ .exe file]] -> **Execution**

## Java Compilation Process

**java**: 
`java code` -> **interpreting(javac)** [ .class generates bytecode ] -> **Execution** [JVM loads .class file and JIT compiles the bytecode into machine code]

## JavaScript (JS) and Node.js Execution Process

**js**: 
`js code` -> read by **v8** -> converted into machine code -> **execution**

**node**: 
`js code` -> read by **v8** -> converted into machine code -> **execution**

---

## Detailed Breakdown of C++ Compilation

1. **Preprocessing**
   - The preprocessor runs first and handles things like:
     - **Including libraries**: For example, `#include <iostream>` includes the standard library for input/output.
     - **Macros**: It processes `#define` statements or other preprocessor directives.
   - After preprocessing, it generates an intermediate file (without comments, macros, or libraries) that’s ready for the next step.

2. **Compilation**: 
   - The **compiler** (like `g++`) translates the preprocessed code into assembly language. Assembly is a low-level language that is close to machine code but still readable by humans.
   - At this stage, your code doesn’t yet run, but the compiler generates an object file (e.g., `hello.o`).
   - Error checking occurs here:
     - If there’s any mistake in your code, like a syntax error or missing semicolon, the compiler will stop and show an error message.

   ### Types of Analysis:
   - **Lexical Analysis**: Identifies variables, operators, and keywords.
   - **Syntax Analysis**: Works with structures like `push`, `pop`, `node`, etc.
   - **Semantic Analysis**: Checks for errors like out-of-bound access or memory issues.

   Example assembly code:
   ```assembly
   mov eax, 1          ; Load the value for "stdout" into a register (stdout is file descriptor 1)
   mov ebx, message    ; Load the address of the message ("Hello") into a register
   int 0x80            ; Call a system interrupt to write the message to the console

### Assembler [Assembly to Machine Code] [CPU can directly execute]:
                **Assembly to Machine Code**: After the compiler generates the assembly code, the assembler takes over.
                The assembler is a tool that converts the assembly code into machine code (also called object code or binary code).
                **Machine Code** consists of binary instructions that the CPU understands, and these are specific to the architecture you're working on (e.g., x86 or ARM).
                The result is a .o (object file), which contains machine-readable instructions but isn’t yet a complete program.
                The assembly instruction mov eax, 1 might get converted into machine code like B8 01 00 00 00, which is a sequence of 1s and 0s that the CPU can understand directly.
### Linking:
- After compilation, the **linker** combines your object file with any necessary libraries (like `iostream` or math functions) into a final executable file.
- The linker resolves any references to functions or variables that are declared but not yet defined (like `std::cout` or `main`).
- The result is an executable file:
  - On Windows, this might be `hello.exe`.
  - On Linux, it could just be `a.out`.

# Lecture 6-9: Synchronous vs Asynchronous Execution
   ## Synchronous
     ###   code:
            let a=2
            let b=3
            function calculateSum(a,b) {
                console.log("Your first Val is:",a);
                console.log("Your second Val is:",b);
                console.log("a+b=",a+b);
            }
      ###  glossary:
            Call Stack:
            Memmory Heap:a,b
            Garbage Collector:unused var/function
      ###  explaination:
            Global execution Context will be pushed in Stack
            a,b pushe in memory Heap
            now func will be, pushed in Stack
            now func called , top of st run and pop and return to global Execution context
  ##  Async:
        v8->os: lib uv(async io make simple,written in c)
        v8+lib uv
        Sure! To explain how multiple asynchronous operations such as API requests, web searches, file reading, and timeouts are managed, let’s break down each step into simple words and provide detailed diagrams to illustrate the process.

                ### Components Overview

                    1. **Call Stack**: Keeps track of the currently executing context (e.g., functions currently being executed).
                    2. **Web APIs**: Handles asynchronous operations like API requests, timeouts, and file reading (in Node.js).
                    3. **Callback Queue**: A queue that stores callback functions to be executed once their associated operations are complete.
                    4. **Event Loop**: Continuously checks the call stack and the callback queue, moving functions from the queue to the call stack for execution as soon as the call stack is clear.
                ### Step-by-Step Breakdown with Diagrams
                    #### Step 1: Execution Begins

                        When the code starts, the global execution context is pushed onto the call stack.

                        ```plaintext
                        +---------------------------+
                        |       Call Stack         |
                        |---------------------------|
                        | Global Context            |
                        +---------------------------+

                        +-------------------+
                        |    Memory Heap    |
                        |-------------------|
                        |                   |
                        +-------------------+
                        ```
                    #### Step 2: Console Log 'Start'

                        The first statement is executed:

                        ```plaintext
                        +---------------------------+
                        |       Call Stack         |
                        |---------------------------|
                        | Global Context            |
                        +---------------------------+

                        +-------------------+
                        |    Memory Heap    |
                        |-------------------|
                        |                   |
                        +-------------------+
                        ```
                        Output: `Start`
                    #### Step 3: Timeout for 'Timeout 1'

                        The `setTimeout` function is called and scheduled in the Web APIs:

                        ```plaintext
                        +---------------------------+
                        |       Call Stack         |
                        |---------------------------+
                        | Global Context            |
                        +---------------------------+

                        +-------------------+
                        |      Web API      |
                        |-------------------|
                        | Timeout for 1s    |
                        +-------------------+

                        +-------------------+
                        |    Memory Heap    |
                        |-------------------|
                        |                   |
                        +-------------------+
                        ```
                    #### Step 4: API Request

                        The fetch function simulates an API request. This request is also handled by the Web APIs:

                        ```plaintext
                        +---------------------------+
                        |       Call Stack         |
                        |---------------------------+
                        | Global Context            |
                        +---------------------------+

                        +-------------------+
                        |      Web API      |
                        |-------------------|
                        | Timeout for 1s    |
                        | API Request       |
                        | (Pending)        |
                        +-------------------+

                        +-------------------+
                        |    Memory Heap    |
                        |-------------------|
                        |                   |
                        +-------------------+
                        ```
                    #### Step 5: Timeout for 'Web Search'

                        Another timeout is scheduled for 2 seconds:

                        ```plaintext
                        +---------------------------+
                        |       Call Stack         |
                        |---------------------------+
                        | Global Context            |
                        +---------------------------+

                        +-------------------+
                        |      Web API      |
                        |-------------------|
                        | Timeout for 1s    |
                        | API Request       |
                        | (Pending)        |
                        | Timeout for 2s    |
                        +-------------------+

                        +-------------------+
                        |    Memory Heap    |
                        |-------------------|
                        |                   |
                        +-------------------+
                        ```
                    #### Step 6: Simulated File Read Operation

                        A file reading operation is also initiated with a timeout:

                        ```plaintext
                        +---------------------------+
                        |       Call Stack         |
                        |---------------------------|
                        | Global Context            |
                        +---------------------------+

                        +-------------------+
                        |      Web API      |
                        |-------------------|
                        | Timeout for 1s    |
                        | API Request       |
                        | (Pending)        |
                        | Timeout for 2s    |
                        | Timeout for 1.5s   |
                        +-------------------+

                        +-------------------+
                        |    Memory Heap    |
                        |-------------------|
                        |                   |
                        +-------------------+
                        ```
                    #### Step 7: Console Log 'End'

                        The next line of code executes, producing another output:

                        ```plaintext
                        +---------------------------+
                        |       Call Stack         |
                        |---------------------------+
                        | Global Context            |
                        +---------------------------+

                        +-------------------+
                        |      Web API      |
                        |-------------------|
                        | Timeout for 1s    |
                        | API Request       |
                        | (Pending)        |
                        | Timeout for 2s    |
                        | Timeout for 1.5s   |
                        +-------------------+

                        +-------------------+
                        |    Memory Heap    |
                        |-------------------|
                        |                   |
                        +-------------------+
                        ```
                        Output: `End`
                    ### Step 8: Event Loop Checking Call Stack and Callback Queue

                        Now the event loop starts checking for tasks in the Web API. This will proceed in the order that the tasks are scheduled.

                        #### **At 1 second**: First Timeout completes

                        - The first timeout triggers:

                        ```plaintext
                        +---------------------------+
                        |       Call Stack         |
                        |---------------------------+
                        | +-----------------------+ |
                        | | Timeout Callback      | |
                        | | (Timeout 1)          | |
                        | +-----------------------+ |
                        |                           |
                        +---------------------------+

                        +-------------------+
                        |      Web API      |
                        |-------------------|
                        | API Request       |
                        | (Pending)        |
                        | Timeout for 2s    |
                        | Timeout for 1.5s   |
                        +-------------------+

                        +-------------------+
                        |    Memory Heap    |
                        |-------------------|
                        |                   |
                        +-------------------+
                        ```
                        Output: `Timeout 1`

                        After this, the timeout context is popped off the call stack.

                    ### **At 1.5 seconds**: File Read Timeout completes

                        - The file read operation callback is executed:

                        ```plaintext
                        +---------------------------+
                        |       Call Stack         |
                        |---------------------------+
                        | +-----------------------+ |
                        | | File Read Callback    | |
                        | | (File Read Completed) | |
                        | +-----------------------+ |
                        |                           |
                        +---------------------------+

                        +-------------------+
                        |      Web API      |
                        |-------------------|
                        | API Request       |
                        | (Pending)        |
                        | Timeout for 2s    |
                        +-------------------+

                        +-------------------+
                        |    Memory Heap    |
                        |-------------------|
                        |                   |
                        +-------------------+
                        ```
                        Output: `File Read Completed`

                        Again, this context is popped off the stack.
                    ### **At 2 seconds**: Web Search Timeout completes

                        - The web search timeout completion triggers:

                        ```plaintext
                        +---------------------------+
                        |       Call Stack         |
                        |---------------------------+
                        | +-----------------------+ |
                        | | Web Search Callback    | |
                        | | (Web Search Result)    | |
                        | +-----------------------+ |
                        |                           |
                        +---------------------------+

                        +-------------------+
                        |      Web API      |
                        |-------------------|
                        | API Request       |
                        | (Pending)        |
                        +-------------------+

                        +-------------------+
                        |    Memory Heap    |
                        |-------------------|
                        |                   |
                        +-------------------+
                        ```
                        Output: `Web Search Result`
                    ### **At the API Request Completion**: 

                        Finally, when the API request completes (finds data and resolves promise):

                        ```plaintext
                        +---------------------------+
                        |       Call Stack         |
                        |---------------------------+
                        | +-----------------------+ |
                        | | API Response Callback   | |
                        | +-----------------------+ |
                        +---------------------------+

                        +-------------------+
                        |      Web API      |
                        |-------------------|
                        |                   |
                        +-------------------+

                        +-------------------+
                        |    Memory Heap    |
                        |-------------------|
                        |                   |
                        +-------------------+
                        ```
                        Output: `API Response: {data: ..}` (assumed structure of the response)
                                Here's some example code:
                        EXAMPLE:
                            ```javascript
                            console.log('Start');

                            setTimeout(() => {
                                console.log('Timeout 1');
                            }, 1000);

                            fetch('https://api.example.com/data') // Simulating an API request
                                .then(response => response.json())
                                .then(data => console.log('API Response:', data));

                            setTimeout(() => {
                                console.log('Web Search Result');
                            }, 2000);

                            // Simulated file read operation
                            setTimeout(() => {
                                console.log('File Read Completed');
                            }, 1500);

                            console.log('End');
                ### **Final Summary of the Process**

                    1. The code starts executing in a synchronous manner until it hits asynchronous operations (`setTimeout`, fetch).
                    2. Asynchronous operations are handed off to **libuv**.
                    3. The **call stack** is now free to execute other synchronous operations.
                    4. Once each asynchronous operation is complete, the relevant callback is placed in the **callback queue**.
                    5. The **event loop** manages checking the callback queue and placing callbacks into the call stack for execution as soon as it is clear.
                    6. All callbacks are executed in order based on their completion time.
            inline Caching
            copy enision
        This whole process allows JavaScript to handle I/O operations, network requests, and other time-consuming tasks without freezing the entire application, providing a seamless user experience.
            fetch:100-200 ms
            timeOut:5s
            file:10-20ms
        ❗INTERVIEW: Suppose u have async function like reading file but in that function u have a sync call like in file we have raedFileSync() now although the file call i async it will go to lib uv but inside that it will see sync operation, an it will block the main thread, until that operation completes
        ❗INTERVIEW:
            what if u have setTimeOut of 0s
            BTS:
                it will work like , fisrt start executing from start then when it will encounter setTimeOut it will go to libuv and when timer over, it wont print allthogh it have 0s, until my call satck get empty.
                Code:
                    console.log("start");
                    setTimeout(() => {
                        console.log("ASAP");
                    }, 0);
                    console.log("end");
                Ouput will be:
                    start
                    end
                    ASAP
    Google’s V8 with Internal Working: v8dev website
        CODE->Parsing
            Parsing:variable declaration, function executions, etc
                ↪️Lexical Analysis OR Tokenization:broken down into tokens[var,func all are convert into token]
                ↪️Syntax Analysis:ur token converted into AST[abstract syntax tree], astexplorer.net let u see syntax tree
                    var x="pranjal"
                    function Namaste(){
                        console.log("namaste node");
                    }
                    var x:identifier
                    "pranjal":literal
                     ### Explanation:
                            - The **Program** node is the root of the AST, containing all the code statements.
                            - The **VariableDeclaration** node represents the `var x = "pranjal";` part.
                            - The **FunctionDeclaration** node represents the `function Namaste() {...}` part.
                            - The **BlockStatement** contains the body of the function.
                            - The **CallExpression** represents the function call to `console.log("namaste node")`, which has two identifiers (`console` and `log`) and a literal string argument (`"namaste node"`).

                    Detailed:
                            ### Abstract Syntax Tree (AST) Representation:

                                #### 1. For the variable declaration:
                                - A **VariableDeclaration** node will represent the `var` declaration.
                                - This node will have a child representing the **VariableDeclarator** (declarator for `x`).
                                    - Inside the **VariableDeclarator**, there will be:
                                    - **Identifier** (representing the variable `x`).
                                    - **Literal** (representing the string value `"pranjal"`).

                                #### 2. For the function declaration:
                                - A **FunctionDeclaration** node will represent the `function Namaste() {...}`.
                                - This node will have:
                                    - **Identifier** (representing the function name `Namaste`).
                                    - **Params** (which will be empty because the function does not have any parameters).
                                    - **BlockStatement** (representing the body of the function).
                                    - Inside the **BlockStatement**, there will be:
                                        - **ExpressionStatement** (representing the `console.log("namaste node")`).
                                        - Inside the **ExpressionStatement**, there will be:
                                            - **CallExpression** (representing the `console.log` call).
                                            - Inside the **CallExpression**, there will be:
                                                - **Identifier** (representing `console`).
                                                - **Identifier** (representing `log`).
                                                - **Literal** (representing the string `"namaste node"`).

                            ### AST Structure in Detail:

                                ```json
                                {
                                "type": "Program",
                                "body": [
                                    {
                                    "type": "VariableDeclaration",
                                    "kind": "var",
                                    "declarations": [
                                        {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "x"
                                        },
                                        "init": {
                                            "type": "Literal",
                                            "value": "pranjal",
                                            "raw": "\"pranjal\""
                                        }
                                        }
                                    ]
                                    },
                                    {
                                    "type": "FunctionDeclaration",
                                    "id": {
                                        "type": "Identifier",
                                        "name": "Namaste"
                                    },
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                            "type": "CallExpression",
                                            "callee": {
                                                "type": "MemberExpression",
                                                "object": {
                                                "type": "Identifier",
                                                "name": "console"
                                                },
                                                "property": {
                                                "type": "Identifier",
                                                "name": "log"
                                                },
                                                "computed": false
                                            },
                                            "arguments": [
                                                {
                                                "type": "Literal",
                                                "value": "namaste node",
                                                "raw": "\"namaste node\""
                                                }
                                            ]
                                            }
                                        }
                                        ]
                                    }
                                    }
                                ]
                                }
                                ```

                            ### Visualization:
                                ```
                                Program
                                ├── VariableDeclaration (var)
                                │   └── VariableDeclarator
                                │       ├── Identifier (x)
                                │       └── Literal ("pranjal")
                                └── FunctionDeclaration (Namaste)
                                    ├── Identifier (Namaste)
                                    ├── Params []
                                    └── BlockStatement
                                        └── ExpressionStatement
                                            └── CallExpression
                                                ├── MemberExpression
                                                │   ├── Identifier (console)
                                                │   └── Identifier (log)
                                                └── Arguments
                                                    └── Literal ("namaste node")
                                ```
                ↪️After making AST it goes into interpreter,AST name in google is Ignition, Interpreter convert into ↪️ bytecode
                ❗INTERVIEW:js is a interpreted or compile language
                    => interpreter[v8] + compiler[JIT] [name : turboFan Compiler]
                            in interpreted language , interpreter read code line by line
                            in compiled language , whole code first converted into machine code and then machine code executed
                ↪️Execution    
    libuv with Internal Working:
       Event Loop Overview
        The Event Loop in JavaScript is a fundamental part of its concurrency model, allowing for non-blocking I/O operations by using a single-threaded environment. This means JavaScript can perform operations asynchronously while executing other code.
        The event loop is a construct that allows Node.js to perform non-blocking I/O operations. It schedules and executes code, collects and processes events, and executes queued sub-tasks. Node.js runs on a single thread, but it can manage multiple asynchronous operations through the event loop.

        Event Loop Phases

            Timers: This phase executes callbacks from setTimeout and setInterval. Callbacks scheduled to execute after a specified delay are handled here.
            Poll: This phase retrieves new I/O events and executes their callbacks. If there are no new events, it will wait for a specified period for new events to arrive.
            Check: This phase is where setImmediate callbacks are executed. Callbacks scheduled with setImmediate will run after the poll phase.
            Close Callbacks: This phase executes callbacks for closed resources, like when a socket or file descriptor is closed.

        Execution Breakdown of the Provided Code
            Let's analyze the code you provided[outside loop]:
                ```javascript
                const fs = require("fs");
                const a = 100;

                setImmediate(() => console.log("setImmediate"));

                fs.readFile("./file.txt", "utf8", () => {
                console.log("File Reading CB");
                });

                setTimeout(() => console.log("Timer expired"), 0);

                function printA() {
                console.log("a=", a);
                }

                printA();
                console.log("Last line of the file.");
                ```

                **1. Synchronous Execution:**
                    - Start executing the script synchronously.
                    **Synchronous logs so far:**
                    ```
                    a= 100
                    Last line of the file.
                    ```

                **2. Asynchronous Callbacks:**
                    - Once the synchronous code is executed, the event loop moves to the asynchronous callbacks.
                    - The **Timers Phase** will now execute the `setTimeout` callback:
                    - `console.log("Timer expired");` logs "Timer expired".

                    - Next, it goes to the **Check Phase** where `setImmediate` callbacks reside:
                    - `console.log("setImmediate");` logs "setImmediate".

                    - Finally, the **I/O Callbacks Phase** executes the callback from the `fs.readFile`:
                    - `console.log("File Reading CB");` logs "File Reading CB".

                ### Final Order of Execution
                    a 100
                    last line of the file
                    ----stack empty----
                    Timer expire 
                    set Immediate
                    File Reading cb[bcz file take time to read]
            Let's analyze the code you provided[inside loop]:
                Code
                        const fs = require("fs");
                    const a = 100;

                    // Schedule a callback for the next immediate cycle
                    setImmediate(() => console.log("setImmediate"));

                    // Create a promise that resolves immediately
                    Promise.resolve("Promise").then(console.log);

                    // Start reading a file asynchronously
                    fs.readFile("./file.txt", "utf8", () => {
                    console.log("File Reading CB");
                    });

                    // Schedule a callback with a delay of 0 milliseconds
                    setTimeout(() => console.log("Timer expired"), 0);

                    // Schedule a callback to be executed before the next event loop iteration
                    process.nextTick(() => console.log("process.nextTick"));

                    // Function to print the value of 'a'
                    function printA() {
                    console.log("a=", a);
                    }

                    // Call the function
                    printA();

                    // Print a final line
                    console.log("Last line of the file.");
                Output:
                    // a=100
                    // Last line of the file.
                    // process.nextTick
                    // Promise
                    // timer
                    // setImmediate
                    // File Reading CB
            Let's analyze the code you provided[process in file, stard from immediate]:  
                Code:
                    const fs = require("fs");

                    setImmediate(() => console.log("setImmediate"));

                    setTimeout(() => console.log("Timer expired"), 0);

                    Promise.resolve("Promise").then(console.log);

                    fs.readFile("./file.txt", "utf8", () => {
                        setTimeout(() => console.log("2nd timer"), 0);
                        
                        process.nextTick(() => console.log("2nd nextTick")); 
                        
                        setImmediate(() => console.log(" 2nd setImmediate")); 
                        
                        console.log("File Reading CB");
                    });

                    process.nextTick(() => console.log("nextTick"));

                    console.log("Last line of the file.");

                Output:
                    last line of the file
                    nextTick
                    promise
                    Timer expire
                    set immediately
                    file raeding cb
                    2nd nextTick
                    ----starts from immediate not timer------
                    2nd set immediately
                    2nd timer
            Let's analyze the code you provided[nested nextTick]:

            ---- complet all innerNextTick then move to promis------
            Code:
                const fs = require("fs");

                setImmediate(() => console.log("setImmediate"));

                setTimeout(() => console.log("Timer expired"), 0);

                Promise.resolve("Promise").then(console.log);

                fs.readFile("./file.txt", "utf8", () => {
                console.log("File Reading CB");
                });
                process.nextTick(() => {
                process.nextTick(() => console.log(" inner nextTick"));
                console.log("nextTick");
                });

                console.log("Last line of the file.");
            Output:
                last line of the file
                nextTick
                inner nextTick
                promise
                timer expired
                setImmediate
                file reading cb


            
