//Destructuring is a JavaScript feature that allows you to extract values from arrays or properties from objects 
// and assign them directly to variables in a concise way.

// Array Example 
let num = [1,2,3,4,5];
let[a,b,c,...d]=num;
console.log(a);
console.log(b);
console.log(c);
console.log(d);


//Object Example
const person = {
    name:'Lamie Yamal',
    team: 'Spain',
    position: 'forward'
}

const {team} = person
console.log(team);