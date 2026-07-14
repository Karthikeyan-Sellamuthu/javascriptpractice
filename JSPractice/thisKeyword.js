//We often use this. keyword in JS in class and function but we have confusion on how to use it
//this depends on how a function is called, not where it is defined.

/* The function details() returns an object with:
    a name property
    a greet() method
*
*/

function details(name){
   
return{
    name,
    greet: function(){
        console.log(`Hi this is my name ${this.name}`)
    }


}
}

const c = new details('Karthi');
c.greet();
    
const{greet} = new details('Ram');
greet();

const person={
    name:'KArthi',
    greet:function(){
        console.log(`This is my new name ${this.name}`);
    }
}

person.greet();