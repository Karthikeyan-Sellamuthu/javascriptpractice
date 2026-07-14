//In JS inside the array we can have collection of different datatype it can be string,number,null,boolean,function,object
//Eg:
let arr = [1,'karthi',true,null,undefined,()=>{
    console.log('Test Function')
}]
console.log(arr);

// Array has many inbuilt methods which will be useful to make changes in the array
//1. Push() ==> which is used to insert the element in the end of the array
let num =[1,2,3,4];
num.push(5,6);
console.log(num);

//2. Pop() ==> which is used to remove the last element in the end of the array
let a=[1,2,3,4,5,6];
let removeNum = a.pop();
console.log(removeNum);
console.log(a);

//3. shift ==> which is used to remove the first element in the start of the array
let j =['Apple','Bananana','Jackfruit'];
let fruit=j.shift();
console.log(fruit);
console.log(j);

//4. unshfit() ==> which is used to insert the element in the start of the array
let h = [2,3,5,6,7];
h.unshift(0,1);
console.log(h);

//5. slice ==> which is used to get a part of the array by giving the initial index value and the end value while returning the result it will give the initial index and it will omit the end index inbetween the initial and end will be returned
let k = [1,3,6,8,9,10];
let result=k.slice(1,3);
console.log(result);

//6. map()
let number = [2,5,8,9,10];
let multipleofTwo=number.map((e)=>e*2);
console.log(multipleofTwo);

//7. filter()
let name=['Helen','Alana','Jeana','Kiara','hamilton'];
let filteredName=name.filter((n)=>n.toLowerCase().startsWith('h'));
console.log(filteredName);

//8.reduce
let num2 =[2,3,4,5,6,1,7,8,9]
let sumofnum2 = num2.reduce((acc,num)=>acc+num);
console.log(sumofnum2);

let minNum=num2.reduce((acc,min)=>acc<min?acc:min);
console.log(minNum);

//includes,indexOf,lastIndexOf,some,every,find
let array = [2,12,6,10,11,12,34];
console.log(array.includes(20)); // If given number present it will give the result as true if not value will be false

console.log(array.indexOf(10));
console.log(array.indexOf(14)); // If the given value is not present then it will return -1
console.log(array.lastIndexOf(12));

let s = array.some((e)=>e>100); // If the given value is not matching to the some then it will false else true
console.log(s);

let t = array.every((e)=>e>10);
console.log(t); // If the given value is not matching to the some then it will false else true

//concat
let array1=[1,2,3,4];
let array2=[5,6,7,8];
let resultarray = array1.concat(array2);
console.log(resultarray)

//reverse
let ns= [1,10,20,2,3,5];
console.log(ns.reverse());

//sort() // In JS sort function converts the number to string and then compare and sort with lexograhically which means first element 
// so in order to get correct sorting ascending or descending using comparison function
console.log(ns.sort());

//ascending order using comparison function
console.log(ns.sort((a,b)=>a-b));

//descending order using comparison function
console.log(ns.sort((a,b)=>b-a));

let p=[1,2,3,4,5,6]
console.log(p.length)