//Type assertion means user explicitly telling that this variable is of type number,boolean like that

//1
let value: any = "Hello";

let lengths= (value as string).length;

console.log(lengths); // 5


let js:unknown='Karthi';
let lname = <string> js;
console.log(lname.toUpperCase());
