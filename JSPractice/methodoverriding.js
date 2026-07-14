//static and methodoverriding
//Method overriding is an OOP feature achieved through inheritance. 
// A child class overrides a parent class's method by defining a method with the same name. 
// The child method can have different parameters and a different implementation. When invoked on a child object, 
// the overridden method in the child class is executed.
class Calculator{

    add(n1,n2){
        return n1+n2;
    }

    subtract(m1,m2){
        return m1-m2;
    }

}
class AdvanceCalculator extends Calculator{

    add(...n2){
        let m=0;
        for(let n of n2){
            m+=n; 
        }
        return m;
    }

}
const c1 = new AdvanceCalculator();
let result = c1.add(1,2,3,4,5);
console.log(result);
