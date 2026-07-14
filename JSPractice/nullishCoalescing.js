
//Nullish coalescing
let result;
if(result===null || result===undefined){
    result = 'Hi';
}
console.log(result);

let test=null?? 'Default';
test ='Hard';
console.log(test);


//Switch Case Example 

let language ='Ruby';

switch(language){
    case 'Java': console.log('Get Java course for 20% offer')
                  break;
    case 'Python': console.log('Get Python course for 30% offer')
                  break;
    case 'Javascript': console.log('Get Javascript course for 10% offer')
                  break;
    default: console.log('Sorry No Such course exists');
}