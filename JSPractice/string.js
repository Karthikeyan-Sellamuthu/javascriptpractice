
//Unlike arrays, strings are immutable in JavaScript. Methods such as replace(),
//  toUpperCase(), trim(), and slice() do not change the original string; they return a new string.

//Common methods between string and array (indexOf,lastIndexOf,includes,slice)

//length
let person='Karthikeyan';
console.log(person.length)

//split
let sentence = 'I Love Javascript Programming Language'
let arr = sentence.split(' ');
console.log(arr);

//charAt
let fruit = 'DragonFruit';
console.log(fruit.charAt(5));

//at
console.log(fruit.at(6));

//toUpperCase()
let n='karthi';
console.log(n.toUpperCase()); // To convert the string to uppercase

//toLowerCase()
let m = 'KATE'
console.log(m.toLowerCase()); // To convert the string to lowercase

//startsWith()
let j = ['Banana','Jackfruit','CustardApple','Dragonfruit']
let result=j.filter((e)=>e.startsWith('B'));
console.log(result);

//endsWith()
let result1=j.filter((e)=>e.endsWith('fruit'));
console.log(result1);

//includes ==> if matches it will give you value as true else false
let name='Jack is a boy';
console.log(name.includes('boy'));

//trim
let vechile = ' Honda Amaze ';
console.log(vechile.trim());

//trimStrat()
console.log(vechile.trimStart())
//trimEnd()
console.log(vechile.trimEnd())

//substring ==> First Index value is omitted and the last index value is taken into count
let words = 'KarthiKeyan';
console.log(words.substring(0,6));

//replace
let nm = 'All that dogs are good dogs'
console.log(nm.replace('dogs','GoldenRetreiver'));
//indexof
console.log(nm.indexOf('dogs'))
//lastIndexof
console.log(nm.lastIndexOf('snake'));

//replace all
console.log(nm.replaceAll('dogs','Cats'));
//concat
let d = 'Chennai'
let e = 'City'

//concat
console.log(d.concat(e));
console.log(d+e);



