//Union means one variable can have multiple data type even the function,array can also have multipple data type
/*A union type is created using the | (pipe) operator.

string | number means the value can be either a string or a number.
(string | number | boolean)[] means each element in the array can be a string, number, or boolean.*/

let numbers1:(string|number);
numbers1='John';
console.log(numbers1);

numbers1=123;
console.log(numbers1);

let cars:(string|number|boolean)[] = [1,2,3,'BMW','Benz',true];
console.log(cars);

let arr2: string[] | number[];
arr2=['a','l','m','c'];
console.log(arr2);

arr2=[3,8,5,9];
console.log(arr2);