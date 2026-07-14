
//Single Inheritance -- Unlike java we cannot create a object Example (car c = new car();) It is not supported in JS we should create
//like const c = new Car();

//Also inside the class we don't need to declare the variable with let const keyword and also function declaration with function keyword
class FourWheeler{
    constructor(name,model){
        this.name = name;
        this.model = model;
    }

    fourWheelerDetails(){
        console.log(`The name of company ${this.name} and model is ${this.model}`)
    }
}

class Car extends FourWheeler{
    
    constructor(name,model,price){
        super(name,model);
        this.price = price;
    }

    priceDetails(){
        console.log(`Price of the car is ${this.price}`);
    }

}

const c = new Car('BMW','CMD200','400000');
c.fourWheelerDetails();
c.priceDetails();

