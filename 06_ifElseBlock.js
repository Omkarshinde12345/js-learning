
var person = "Raman"
var age = 19;

if (age>=18) {
    console.log(`Yes plese vote.Age: ${age}, Name: ${person}`);
} else {
    console.log(`Sorry.plese try next year. Age: ${age}, Name: ${person}`);
}


function vote(person,age){
    if (age>=18) {
        console.log(`Yes plese vote.Age: ${age}, Name: ${person}`);
    } else {
        console.log(`Sorry.plese try next year. Age: ${age}, Name: ${person}`);
    }
}
vote("Jenny",34);
vote("Bill",14);
vote("ELon",18);