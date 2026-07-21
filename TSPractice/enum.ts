//enum is used to hold set of constants
/* numeric,string,heterogenous*/

enum Browsers{
    chrome=1,
    firefox,
    edge
}

console.log(Browsers.chrome);
console.log(Browsers.firefox);
console.log(Browsers.edge);

//In Enum if any one of the constant is holding the value and remaining is not having the value even then if we access it
//it increments by one
enum Environment{
    Dev,
    Stage,
     QA=getValue()
}

console.log(Environment.QA);
console.log(Environment.Dev);
console.log(Environment.Stage);

/*If an enum member is initialized using a computed value (such as the return value of a function), 
then any members that follow it must also have explicit initializers. TypeScript cannot automatically determine the next numeric value.*/
function getValue():any{

    return 22.22
}




