const arrayNum = [5, , 7, ,9,[44,5]];
const newArray =arrayNum.flat();
console.log(newArray);


let array = [2, [4, 1, [7,  [8, 4] ] ], 8, 9, , 7];
console.log(array.length);
const arrayFlatten = array.flat(2);
console.log(arrayFlatten);