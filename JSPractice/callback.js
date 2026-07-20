//Callback without setTimeout ayschnronous function
//A callback function is a function passed as an argument to another function so that it can be executed later, 
// either immediately or after some operation is completed. JavaScript provides built-in asynchronous functions such as setTimeout()
//which execute a callback function after a specified delay without blocking the execution of the remaining code.

function greet(callback){

    console.log('Hi Karthi')
    callback('Karthi')
}

function message(name){
    console.log(`Welcome to the learnings of Javascript ${name}`);
}

greet(message);


//With predefined Asynchronous function in JS
function getRequestToken(callback){

    setTimeout(function(){
       console.log('System called the getRequestToken API to fetch the request Token');
       callback();
    },10000)
   console.log('Env Ready');
}

function getUserDetails(){
    console.log('Got the user token and Fetched the user details');
}
getRequestToken(getUserDetails);
