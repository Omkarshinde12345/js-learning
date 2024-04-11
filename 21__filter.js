
let array = [2, 4, 1, 7, 8, 9];
const newArray = array.filter((element)=>{
    return element%2==0
});
console.log(newArray);

let arrayNums = [21, 42, 1, 7, 8, 9];
const arrayMultipleOf3 = arrayNums.filter( (currentValue)=>{
    return currentValue%3==0;
} );
console.log(arrayMultipleOf3);


class Person {
    constructor(name, city, age){
        this.name = name;
        this.city = city;
        this.age = age;
    }
    detail(){
        console.log(`Person Details => Name: ${this.name}, City: ${this.city}, Age: ${this.age}`);
    }
}
const jenny = new Person("Jenny", "Pune", 22);
const bill = new Person("Bill", "Mumbai", 24);
const elon = new Person("Elon", "LA", 38);
const stew = new Person("Stew", "Mumbai", 58);

const arrayPerson = [jenny, bill, elon, stew];

console.log(`== Find out all the person from city Mumbai ===`);
const arrayNew =arrayPerson.filter( (currentValue)=>{
    return currentValue.city=="Mumbai";
} );

arrayNew.forEach( (element)=>{
    element.detail();
} );


console.log(`== Find out all the person whose age is greater than equal to 35 ===`);
arrayPerson.filter( (personObj)=>{
    return personObj.age>=35;
} ).map( (element) =>{
  return element.name;
}).forEach( (element)=>{
   console.log(element);
} );