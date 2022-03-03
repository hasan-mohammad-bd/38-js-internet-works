//set interval
//==============================

console.log("first");
// setInterval(()=>{
//     console.log("tik tik tik tik");
// }, 1000)

let seconds = 0;

 const timeId = setInterval(() => {
    // seconds++;
    console.log(seconds++);
    if(seconds>15){
        clearInterval(timeId)
    }
}, 1000);
console.log("second");

//setInterval() is same as setTimeOut out it runs the code for infinite period of time, 

//clearInterval() is to clear the code which run by setInterval.

//++X : here the increase will be held first
//X++ here initial value will be shown first then the increase value will appear 
