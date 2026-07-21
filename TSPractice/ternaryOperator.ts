let browser:string='Chrome';

let launchBrowser = browser==='Chrome'? 'Launch Chrome':browser==='Firefox'?'Launch Firefox':'Sorry browser not matched';
console.log(launchBrowser);


//Optional / Default parameters

//1. Optional But one thing we keep in mind is optional or default parameter it should be kept as last parameter in the function params
function test(name:string,greet?:string):void{
    console.log(`Hi ${name} and welcome home ${greet}`)
}
test('karthi','Good Morning');
test('Jon snow')


//Default Parameters if the function parameter value is passed as undefined 
// then it will take the default value insted of undefined passed

function testOne(name:string,greet:string='Good Evening'):void{
    console.log(`Hi ${name} and welcome home ${greet}`)
}
testOne('karthi','Good Afternoon');
testOne('karthi',undefined);


let ab:number[]=[1,2,3,4,5];
function sumofArray(arr:number[]):number{
    let result:number=0;
  for(let n of ab){
      result+=n;
  }
   return result;
}

console.log(sumofArray(ab));