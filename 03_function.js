function show(){
    console.log("Inside show function");
}
show();

function add(n1,n2,n3){
    console.log("Arguments",n1,n2,n3);
    var result = n1+n2+n3;
    console.log("Addition is:",result);
}
add(3,6,7)
add(99.89,67,456789)
add(6,7)
add(12,32,78,99)
add("hii", " Good", " Morning")

function subtract(numOne , numTwo){
    console.log("============ subtraction ===============");
    console.log("Arguments:",numOne , numTwo);
    var result = numOne - numTwo;
    return result;
}
var resultnValue = subtract(9,4);
console.log("Result of subtraction", resultnValue);

var resultnValue = subtract(99,42);
console.log("Result of subtraction", resultnValue);

