// silent listen

const isAnagram = (firstWord, secondWord ) =>{
    const firstSortedWord = firstWord.split("").sort().join("");
    const secondSortedWord = secondWord.split("").sort().join("");
    return firstSortedWord == secondSortedWord;
}
let result = isAnagram("such", "much");
console.log(`Given words or strings are anagram: ${result}`);