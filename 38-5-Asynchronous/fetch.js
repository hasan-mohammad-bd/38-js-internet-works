console.log(111111);
console.log(1122111);
//it will be eructated five second later
// setTimeout(() => console.log("aaaaaaa"),5000);

//fetch will be executed when the data will come. it will be executed at last. **fetch works asynchronously***(not synchronously)
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log(11122111);
console.log(11145111);
for(let i = 0; i<100000; i++){
    console.log(i);
}