//any ==> Means it can hold any kind of data type values

//For Variable
let nk:any = 'Hari';
nk=true,
nk=123;
console.log(nk);

//for array
let portals:any[]=['QA',1,'Stage',null,undefined];
console.log(portals)

//To print only the values
console.log(portals.filter(Boolean));

//for function
function anyTypeFun(data:any):any{
    if(typeof data==='number'){
        return 120;
    }else if (typeof data==='string'){
        return 'Hi';
    }
}

console.log(anyTypeFun(3));
console.log(anyTypeFun('Bye'));

//Never is used to throw error and void means it is used to explicitly mention that particular function is not going to return any value
//Never
/*function displayMsg():never{
    throw new Error('Error message ');
}

console.log(displayMsg())*/

let jh:void=undefined; // except undefined it will not any other values
console.log(jh);