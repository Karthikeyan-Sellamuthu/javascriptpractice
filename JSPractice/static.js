//static variable and its value is common for each object purpose of static variable is to avoid duplication of creating the same
//Instance properties belong to objects and are accessed using this.property.
//Static properties belong to the class and are accessed using ClassName.property
//Here the subclasses has inherited the static property type but we should call it with class name not with this keyword
class Animal{
    static type='Dog';
    constructor(breed,origin){
        this.breed = breed;
        this.origin = origin
    }
}

class Labrador extends Animal{
    constructor(breed,origin){
        super(breed,origin);
    }

    printDetails(){
        console.log(`This is a ${this.breed} and its origin is from ${this.origin} and it is of type ${Labrador.type}`)
    }
}

class GermanShepherd extends Animal{
    constructor(breed,origin){
        super(breed,origin);
    }

    printDetails(){
        console.log(`This is a ${this.breed} and its origin is from ${this.origin} and it is of type ${GermanShepherd.type}`)
    }
}

const d1 = new Labrador('Lab','French');
d1.printDetails();

const d2 = new GermanShepherd('GermanShepherd','Germany');
d2.printDetails();

