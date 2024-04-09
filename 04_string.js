

var greet = "Good Morning";
var totalChars = greet.length;
console.log("Total number of char is:",totalChars);

var charAt0 = greet.charAt(0);
console.log("Character at index 0 is:",charAt0);

var charAt6 = greet.charAt(6);
console.log("Character at index 6 is:",charAt6);

var charAt11 = greet.charAt(11);
console.log("Character at index 11 is:",charAt11);

var sentence = "Type the sender company name Type the sender company name Type the sender company name";
var totalChars = sentence.length;
var lastchar = sentence.charAt(totalChars-1)
console.log("last char is:",lastchar);


console.log("============Index of()===============");
var greet = "Good Morning";
var indexOfM = greet.indexOf('M');
console.log("Index of char M is:",indexOfM);

console.log("============Concat()===============");
var firstName = "Omkar";
var lastName = " Shinde";
var resultConcat = firstName.concat(lastName);
console.log("Concat resutl is:",resultConcat);

console.log("============Replace()===============");
var greet = "Good Morning";
const afterReplace = greet.replace("Morning","Afternoon")
console.log(`After replace string is: ${afterReplace}`);

console.log("============toUpperCase()===============");
var greet = "Good Morning";
var greetInUpperCase = greet.toUpperCase();
console.log(`${greet} in upper case is : ${greetInUpperCase}`);

console.log("=============trim()=================");
var greet = "    Good Morning    ";
var lengthBeforeTrim = greet.length;
console.log(`${greet} it's length is: ${lengthBeforeTrim}`);

var greetAfterTrim = greet.trim();
var lengthAfterTrim = greetAfterTrim.length;
console.log(`${greetAfterTrim} it's length is : ${lengthAfterTrim}`);

console.log(`Total spaces remove is : ${lengthBeforeTrim-lengthAfterTrim}`);

console.log("=================includes()===================");
var greet = "Good Morning";
var result = greet.includes("nin");
console.log(`Is string ${greet} includes word or char 'nin': ${result}`);

var result = greet.includes("MoR");
console.log(`Is string ${greet} includes word or char 'MoR': ${result}`);

console.log("===================search()====================");
var greet  = "Good Morning";
var result = greet.search("Morning");
console.log(`'Morning' is Available at ${result}`);

console.log("==============slice()================");
var greet = "Good Morning";
var result = greet.slice("3");
console.log(`slice is ${result}`);

console.log("==============split()================");
var greet = "Good Morning";
var resultValue = greet.split(" ")
console.log(resultValue);
console.log(`Total words are: ${resultValue.length}`);