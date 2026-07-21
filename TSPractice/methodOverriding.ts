//In TS MethodOverriding the method name and parmater type and return type should be same as
//parent method only the functionality can change

class Animal{

      makeASound(animal:string):void {
        console.log(`${animal} Makes a Sound`);
    }
}
class Dog extends Animal{

    override makeASound(animal:string):void {
        console.log(`${animal} barks`);
        console.log("Andd woof its tail")
    }
}

const ds:Dog = new Dog();
ds.makeASound('Lab');
