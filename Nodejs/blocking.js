// NON_BLOCKING
    // const crypto=require("node:crypto");
    // console.log("=================NON-BLOCKING=============================");  
    // console.log("Starting...");
    // crypto.pbkdf2("ILU","pranjal",50000,50,"sha512",(err,key)=>{
    //     console.log("Key genrated",key);  
    // })
    // function sum(a,b) {
    //     return a+b;
    // }
    // console.log(sum(2,3));
    // console.log("Bye...");

// Blocking
//     console.log("=================BLOCKING=============================");
        // console.log("Starting...");
        // let ans=crypto.pbkdf2Sync("ILU","pranjal",50000,50,"sha512")
        // console.log("Key genrated",ans);  
        // function sum(a,b) {
        //     return a+b;
        // }
        // console.log(sum(2,3));
        // console.log("Bye...");

// setTime Out: it will work like , fisrt start executing from start then when it will encounter setTimeOut it will go to libuv and when timer over, it wont print allthogh it have 0s, until my call satck get empty.
    // console.log("start");
    // setTimeout(() => {
    //     console.log("ASAP");
    // }, 0);
    // let ans=crypto.pbkdf2Sync("ILU","pranjal",50000,50,"sha512")
    // console.log("Key genrated",ans);
    // console.log("end");


