//In Typescript Array can have same elements since if we declare the data type explicitly
// 1. we can declare array in two types

let arr:number[] = [1,2,3,4,5,6,7,8];

for(let num of arr){
    if(num%2===0){
    console.log(num);
    }
}


let test:(number|string)[]=[1,3,'Karthi',4,5,'Venkat'];
console.log(test);

function sumArray(numb:number[]):number{
   let c=0;
   for(let m of numb){
       c+=m;
   }
   return c;
}
 
console.log(sumArray(arr));


//2. Using Generics
let fname:Array<string>=['James','Jack','Butler','Johnson'];
for(let name of fname){
    if(name.includes('James')){
        console.log(name);
    }
}


//1.Array Decalration types using generics and the normal conventional way
//1
let digits:number[] = [6,3,8,9,10];
for(let d of digits){
    console.log(d);
}

//2
let schoolName:Array<string> = ['SVGV','SSVM','AVB','Metro','SIV'];
console.log(schoolName);