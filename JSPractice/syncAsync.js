//Synchronous programming executes code sequentially, where each statement waits for the previous one to complete. 
// Asynchronous programming allows long-running operations, such as API requests, timers, or file reading, to execute without blocking
// the main thread. JavaScript continues executing the remaining code, and when the asynchronous operation completes, 
// its callback, Promise, or async/await continuation is executed.


//Sync
console.log('1');
console.log('2');
console.log('3');

//Async
console.log('Hi');
setTimeout(()=>{
    console.log('Good Morning Welcome to home');
},2000)
console.log('Bye Thanks for coming');

