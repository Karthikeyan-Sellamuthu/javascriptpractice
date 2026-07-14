///By default promise will be in the pending status then it will be changed to either fullfilled or rejected when an operation is perfomed
// Promise is an object used to handle the asynchronous operations they provide a structure for managing and chaining a asynchronous task
//When an asynchronous operation completes successfully, the resolve() function is called, changing the Promise's state from pending to fulfilled. 
//When it fails, the reject() function is called, changing the state from pending to rejected.
const c1 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let num = Math.random();
        if(num>0.5){
            resolve('Random Number is greater than 0.5 - - ' + num);
        }else{
            reject(new Error('Number is less than 0.5 - - '+ num))
        }
    },2000)
})

c1.then(result=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
})