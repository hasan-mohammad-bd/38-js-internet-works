//time out 

//cond is being execute srinconasly .one after another.
function doSomething(){
    console.log("I am coding JavaScript");
}


console.log("first: ami sobar age");
console.log("second: ami sobar age");
setTimeout(doSomething,5000);
console.log("third: ami sobar age");

//setTimeout can be declared as below

//for traditional function
setTimeout(function(){
    console.log("this is for traditional function");
},4000)

//for arrow function 
setTimeout(() => {
    console.log("exploring MDN articles");
}, 3000)

console.log("fourth: ami sobar age");
//setTimeout
//==============================================
//setTimeout will execute at the last when all being executed.
//setTimeout will execute the code after the time end here "5000" id equivalent to 5 sec. 
