//Three type of variables we can declare in JS var,let and const
//var is a function scope variable and it is hoisted (Hositing means the scope of the variable is moved to the top of their scope druing comiplation
//which means if we access it before the decalration it will give the default value undefined)

var a = 10;
console.log(a);

console.log(b);
var b=30;

//function scope and it can be reinitialzed and redeclared

function test(){
    var c = 2;
    console.log(c);
    if(c){
         var c=true;
        console.log(c);
    }
    
}
test();
//console.log(c);

//let and const two are block scoped variable and both are hoisted but remains in the temprorial dead zone if we access the variable
//before its declaration then it will give us an error as reference error Cannot access variable before initialization;

//let can be reinitialized and redeclared with same variable name in different block not in the same block

//console.log(n);

let n=10;
console.log(`let variable value:`,n);

function print(){
    let name='Karthi';
    console.log(name);
    if(name!==null){
        let name='John';
        console.log(name);
    }
}

print();

//const cannot be reinitialized it should be initialized during declaration itself
// and redeclared with same variable name in different block not in the same block

//console.log(result);

const result=true;
function testConst(){
    const num=75;
    console.log(`const variable value`,num);
    if(num>0){
        let num=100;
        console.log(num);
    }
    console.log(num);
}

testConst();

// One important thing is array and object declared using the const keyword can be reassigned or reinitialized only the
//variable cannot be reassigned