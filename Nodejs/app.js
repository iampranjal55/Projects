const {a,arr}=require("./a.js")
const b=require("./b.js")
const {calculateDiff,calculateSum} = require("./sum.js")
const data=require("./data.json")
// import {a} from "./a.js"
// import {b} from "./b.js"
// import { calculateSum as cs,calculateDiff,stop } from "./sum.js";

console.log("a",a);
console.log("b",b);
console.log("arr",arr);


// calculateSum(a,b);
// calculateDiff(a,b);
//  console.log(data);
 
// console.log(global);
// console.log("--------------------------");
// console.log(this);
// console.log(globalThis);
// // console.log(self); -->web workers
// // console.log(frames);
// // console.log(window);-->v8 browser
// console.log(this);

// if(global===this) console.log("true");
// else console.log("false");
// if(global===globalThis) console.log("true");
// else console.log("false");


// // ❗❗❗❗❗DOUBT
// const let=2// just like we can't use let as a varibale name
// then why we can't restrict globalThis like that
// let globalThis=2;
// console.log(globalThis);

// // ❗❗❗❗❗DOUBT
// i exported in let: export let a=2;
// imported:import { a } from "./a.js";
// then why i am not able to change var? a=8;

console.log("FILE NAME",__filename);
console.log("DIR NAME",__dirname);
console.log("MOD_EXPOS:",module.exports);
console.log("REQ:",require);
