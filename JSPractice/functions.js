//1. Function does not return any values
function print(){
    console.log('Hi I am a function');
}

print();

//2.function does not return values but getting the arguement during runtime
function printDetails(name){
    console.log(`Hi my name is ${name}`);
}

printDetails('KarthiKeyan');

//3.function which returns the result
function addTwoNumber(n1,n2){
    return n1+n2;
}

let sum = addTwoNumber(5,10);
console.log(sum);

//4. Anonymous function
let multiply=function(num1,num2){
    return num1*num2;
}
console.log(multiply(25,5));

//5. Arrow function In arrow function if there is a single statement then we no need to mention the return keyword
let divide = (t1,t2)=> t1/t2;
console.log(divide(50,5));

//6.IIFE = Immediate Invoking function
(()=>{
    console.log('IIFE');
})();
