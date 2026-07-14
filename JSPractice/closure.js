//Function inside a function is called as closure in which the inner function has access to the outer function variable/property
// even after the execution of the outer function

function outer(){
    let count=0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}

let c1= outer();
c1();
c1();
c1();