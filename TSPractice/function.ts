
function greet(name:string):void{
    console.log('Hi '+name +' Good Morning');
}

greet('Karthi');


let fruits:string[] = ['Apple','Grapes','Lemon','Watermelon','CustardApple'];
function filterFruit(fruit:string[]):string[]{
    let result:string[]=[];
    for(let f of fruit){
        if(f.endsWith('Apple')){
           result.push(f);
        }
    }
    return result;
}

console.log(filterFruit(fruits));


function selectEnvrionment(env:string):string{
    let url:string='';
    if(env === 'QA'){
        url='https://qa.test.carenext.com';
    }else if(env === 'Dev'){
        url = 'https://dev.test.carenext.com';
    }else if(env === 'UAT'){
        url = 'https://satge.test.carenext.com';
    }
    return url;
}

console.log(selectEnvrionment('QA'));