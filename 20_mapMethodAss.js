

const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];

const newarrayNumbers = arrayNumbers.map((currentValue)=>{
    return currentValue + 10
})
console.log(arrayNumbers);
console.log(`Add 10 into each element` );
console.log(newarrayNumbers);


console.log(`Cube of each array element`);
const arrayNumbersCube= arrayNumbers.map( (currentValue)=>{
    return currentValue * currentValue * currentValue;
} );
console.log(arrayNumbersCube);

console.log(`Add the index value`);
const indexArrayNumbers = arrayNumbers.map( (currentValue,index)=>{
    return currentValue+index;
} );

console.log(indexArrayNumbers)