//Unlike array which is dynamic during runtime we can add element by using push or unshift methods Tuple will not support such things
//It is fixed and the order is maintained

let language:[number,string] = [1,'Javascript'];
console.log(language[0]);
console.log(language[1]);
console.log(language);


let team:[number,string][] = [[1,'Spain'],[2,'Argentina']]
console.log(team[0][1]);
console.log(team[1][1]);

//But in tuples while initialization we should follow the order and fixed size and after
//that we can use push method to add values

let subject:[number,string] = [1,'English'];
subject.push(2,'Tamil');
console.log(subject[1]);


let automationTools:[number,string] =[1,'Playwright'];
console.log(automationTools[1]);