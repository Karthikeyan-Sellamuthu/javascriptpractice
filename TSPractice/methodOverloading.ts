//In JS Method Overloading is not supported because during runtime the compiler will look at the
//last defined method and it calls that method we cannot seggregate by passing the parameters
//whereas in TS method overloading is supported

//One thing is we need to give the number of method declaration but the implementation
//should be done only once
//Here the name should be same and number of parameters can be any
//But the return type and the parameter type can be different

function add(n1:number,n2:number):number;
function add(m2:string,m3:string):string;
function add(m1: string): string;

function add(a:any,b?:any):any{
      return b === undefined ? a : a + b;
}

console.log(add(2,2));
console.log(add('Brandon'));
