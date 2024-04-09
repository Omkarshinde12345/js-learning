

var result = function(word){
    var result = word.length%2==0 ? "EVEN": "ODD";
    console.log(`Given word ${word} is with ${result} length`);
}
result("JavaScript");
result("I am hero");

//FE to check whether number is multiple of 3 or not
var multiple = function(num){
    var result = num%3==0 ? "YES":"NO";
    console.log(`Given number ${num} is multiple of 3==> ${result}`);
}
multiple(9);
multiple(11);