console.log(`=== Callback======`);
function greet(callbacks){
    console.log(`Good Morning`);
    callbacks();
    let innerFunction = function(){
        console.log(`Inside inner function...`);
    }
    return innerFunction;
}
let saySomething = function(){
    console.log(`How are you.... `);
}
let result = greet(saySomething);
result();
// greet(saySomething)();