let arr=[1,3,5,2,3,8,5,2,1,9,10];
let result = [...new Set(arr)];
console.log(result);
console.log(result.sort((a,b)=>(b-a)));

//Loops
let n=['kholi','dhoni','dravid','devilliers'];

//normal for loop
for(let i=0;i<n.length;i++){
    console.log(n[i]);
}

let j=[1,2,3,4,5,6];

//For of loop iterates over the values
for(let n of j){
    console.log(n);
}

//For in loop iterates over the index
for (let i in j){
    console.log(i+ '--' + j[i]);
}