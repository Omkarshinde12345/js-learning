let person = {
    age: 22,
    city: "Pune"
}

function greet(message, sayHello){
    console.log(message, sayHello);
}
// greet.call(person, "Good Morning", "Hey Hello");
// greet.apply(person, ["Good Morning", "Hey Hello"]);

let newFunction = greet.bind(person);
newFunction("Good Morning", "Hey Hello");