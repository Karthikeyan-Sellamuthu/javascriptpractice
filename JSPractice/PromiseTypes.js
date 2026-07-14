//Promise.all() runs multiple promises in parallel and returns a single Promise. 
// It resolves only when all promises are fulfilled and returns an array of their results in the same order as the input. 
// If any promise rejects, Promise.all() immediately rejects with that error. It does not wait for the remaining promises 
// to fulfill before rejecting, although those promises continue executing in the background.

//Example:
function test1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Value from Test 1');
        },1000);
    });
}
function test2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Value from Test 2');
        },1000);
    });
}
function test3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             resolve('Value from Test 3');
        },1000);
    });
}

const c1 = Promise.all([
    test1(),
    test2(),
    test3()
]).then(result=>{
    console.log("Resuts :", result)
}).catch(error=>{
    console.log("Error :", error);
})


/*Promise.allSettled() executes multiple promises in parallel and waits for all of them to settle, 
regardless of whether they are fulfilled or rejected. It always returns a fulfilled Promise containing an array of result objects. 
Each result object has a status property ("fulfilled" or "rejected"). 
If fulfilled, it contains a value; if rejected, it contains a reason. Unlike Promise.all(), 
it does not fail fast when one promise is rejected.*/

function test4(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Value from Test 1');
        },1000);
    });
}
function test5(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error('Test Errored'));
        },1000);
    });
}
function test6(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             resolve('Value from Test 3');
        },1000);
    });
}

const c2 = Promise.allSettled([
    test4(),
    test5(),
    test6()
]).then(results=>{
    results.forEach(result=>{
        if(result.status='fulfilled'){
            console.log('Success:' + result.value);
        }else{
            console.log('Failed:' + result.reason);
        }
    })
})
//Promise.any()
/*Promise.any() executes multiple promises in parallel and returns the first fulfilled promise.
 It ignores rejected promises as long as at least one promise is fulfilled.
 If all the promises are rejected, it rejects with an AggregateError that contains all the rejection reasons.*/

//Promise.race()
/*Promise.race() executes multiple promises in parallel and returns a single Promise that settles with the result of the first promise to settle, whether it is fulfilled or rejected. 
It does not wait for the remaining promises, although they continue executing in the background.*/