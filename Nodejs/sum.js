
 function calculateSum(a,b) {
    console.log("Your first Val is:",a);
    console.log("Your second Val is:",b);
    console.log("a+b=",a+b);
}
 function stop(){
    setTimeout(() => {
        console.log("thanx for waiting😊");
    }, 5000);
}
stop();

 function calculateDiff(a,b) {
    console.log("Your first Val is:",a);
    console.log("Your second Val is:",b);
    console.log("a-b=",a-b);
}
 let str = "I am from SUm";
module.exports={
    calculateSum,
    calculateDiff,
    str
};