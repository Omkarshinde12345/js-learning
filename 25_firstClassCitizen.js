

// First class Citizen
// 1. FE
console.log(`=== FE ======`);
let add = function(){
    console.log(`Inside add function....`);
}
add();
// 2 Callback
console.log(`=== Callback======`);
function greet(callbacks){
    console.log(`Good Morning`);
    callbacks();
}
let saySomething = function(){
    console.log(`How are you.... `);
}
greet(saySomething);

// 3. Function can return another function
console.log(`=== Function can return another function =====`);
function show(){
    console.log(`Inside show function...`);
    let display = function(){
        console.log('Inside display...');
    }
    return display;
}
// show()();
let result = show();
result();