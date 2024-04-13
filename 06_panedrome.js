// madam dad mom nayan radar amma mam level nitin
// hello
function isPalindrome(word){
    const arrayChars = word.split("");
    arrayChars.reverse();
    const reverseWord = arrayChars.join("");
    const result = reverseWord==word;
    return result;
}
var result = isPalindrome("nitin");
console.log(`is word 'nitin' palindrome : ${result}`);