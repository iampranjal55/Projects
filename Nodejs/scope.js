// Module.exports
    // function name() {
    //     let a=2;
    //     console.log(a);
    // }
    // console.log(a); //ReferenceError: a is not defined, a will be access only inside function
    // ⁉️ why module.exports?
    // thats how modules are created in js(module.exports), node will wrap in the (IIFE[immediately invoked function expression])
    // function, so thats why we cant access variable of one file into another without importing
    // IIFE invoke very quickly
// (    function () {
//    let arr=["all code of moudule reside here","node js will wrap ur code in iife and then it go to v8","when we do this","require(./xyz.js)","node put all the code of file xyz inside an iife","modules,require passed in iife"]
//    console.log(arr);     
//     })()
// const wrapper=['(function (modules,require,exports,__filename,__dirname) {','\n}']

// (    function (modules,require,exports,__filename,__dirname) {
//         console.log(globalThis);   
//         function calculateSum(a,b) {
//             console.log("Your first Val is:",a);
//             console.log("Your second Val is:",b);
//             console.log("a+b=",a+b);
//         }
//     })(modules)
    
    // and now this 1 func passed to v8
    //1) resolving the module(chk, global , local, json pth, util path etc)
    //2) loading the module(file content,gets the data)
    //3) Complie: wrap inside the iife[wrapper is an array]  let wrap=function(script){return Module.wrapper[0]+script+Module.wrapper[1]} //here script is our code
    //4) code evaluation(module.exports return)
    //5) caching- when a file req by lots of module, then caching comes, it will cache the require and instead of repating all the steps again, it will take the cache
    // 35:53
    // in node github repo
    // v8 folder handels the v8 work
    // lib folder handels most of js works
    // lib->internals->modules->helper.js->mainRequire


    