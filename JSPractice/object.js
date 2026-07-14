//1. Creattion of object

const person = {
    name:'Karthikeyan',
    place:'Chennai',
    occupation:'Senior QA Engineer'
}

console.log(person);

//To get a specific property from the object
console.log(person.name);
     //or
console.log(person['place']);


//To Insert a new property in the existing object
person.country='India';

console.log('After adding a property country', person);

//To delete a property from the existing object person
delete person.occupation;
console.log(person);

//To check whether the property exists in object person
let r = person.hasOwnProperty('occupation');
console.log(r);

let m = person.hasOwnProperty('place');
console.log(m);

//To get only the both value and properties from the object
console.log(Object.entries(person));
console.log(Object.keys(person));
console.log(Object.values(person));

//Class style object creation is done in the Inheritance class refer that

function car(name,model){
    this.name = name;
    this.model = model;
}

const c1 = new car('Honda','Amaze');
console.log(c1.name);
console.log(c1.model);
