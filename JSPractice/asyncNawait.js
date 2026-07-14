/*An async function always returns a Promise. If it returns a normal value, 
JavaScript automatically wraps it in a resolved Promise using Promise.resolve(). 
The await keyword can only be used inside an async function (or at the top level of an ES module). 
It pauses the execution of that async function until the awaited Promise settles, then resumes execution with the resolved value.*/

async function test(){
     return 24;
}

console.log(test())

function generateRandom() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = Math.random();

            if (value > 0.5) {
                resolve(value);
            } else {
                reject(new Error("Value is less than 0.5"));
            }
        }, 1000);
    });
}

async function randomValue() {
    try {
        const result = await generateRandom();
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

randomValue();