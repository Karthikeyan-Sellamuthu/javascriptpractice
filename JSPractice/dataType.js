//Primitive Data Type - String, Number, Boolean, null, undefined, symbol,BigInt
//Non Primitive Data Type - array,function,object
//Primitive values are stored by value, whereas non-primitive values are stored by reference.

let string = 'KArthi';
let num =10;
let bool = true;
let j=null;;
let m=undefined;
let BigInt = 123456789n;

console.log(string);
console.log(num);
console.log(bool);
console.log(j);
console.log(m);
console.log(BigInt);

//Primitive data type values are stored by value
let a =10;
let b = a;
// which means copy of a (10) is stored in the variable a;
console.log(`copy of a`,b);

b=20; //by changing the value of b does'nt affect the value of a so that we call Primitive data type values are stored by value
console.log(a);
console.log(b);


//Non Primitive data type value are stored by reference

let person1={
    name:'Karthi',
    place:'Chennai'
}

let person2 = person1;
person2.place='Coimbatore';

console.log(person1.place); 
// Here the place value of person1 got changed becoz both person1 and person2 refers the common reference so if we change it will change in both place
console.log(person2.place); // copies the reference not the actual object 