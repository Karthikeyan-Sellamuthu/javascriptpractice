//Typescript is superset of JS in which it is a statically typed programming language which supports
//Object oriented programming and strongly typed language

//Type Inference => If we did'nt mention the datatype to the variable explicitly then 
//the complier will assign the data type based on the value assigned
let a=10;
console.log(typeof a);

//Type Annotation => If user explicitly mention the datatype of the variable then it is called
//as type annotation
let result:Boolean
result=false
console.log(result);

let num:undefined=undefined;
console.log(num);


//any data type => It can hold different data type in same variable if the data type is mentioned as any
let k:any='Karthi'
console.log(k);

k=10;
console.log('Reassigning with different data type:', k);

//For single variable which supports multiple data type 
let rupees:(number|string)
rupees=1000;
console.log(rupees);

rupees='Ten Thousand Rupees only'
console.log(rupees);



