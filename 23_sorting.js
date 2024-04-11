const arrayFrds = ["Stew", "Elon", "Jenny", "Bill"];
console.log(arrayFrds);
console.log(`Sorting friends name in ascending order`);
arrayFrds.sort();
console.log(arrayFrds);
console.log(`Sorting friends name in descending order`);
arrayFrds.reverse();
console.log(arrayFrds);

let array = [2, 40, 19, 79, 8, 9];
console.log(array);
console.log(`Custom sorting on array numbers in ascending order`);
array.sort( (n1, n2)=> {
    return n1>n2 ? 1 : -1;
}  );
console.log(array);
// array.reverse();
// console.log(array);

let arrayNew = [2, 40, 19, 79, 8, 9];
console.log(`Custom sorting on array numbers in descending order`);
arrayNew.sort( (n1, n2)=> {
    return n1>n2 ? -1 : 1;
}  );
console.log(arrayNew);