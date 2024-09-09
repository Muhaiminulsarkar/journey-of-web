
/* 

Write a function to count the number of vowels in a string.

*/

let sentence = 'upoma';

function findVowels(sentence) {
    console.log(sentence);
    let array = sentence.split("");
    const vowelArray = [];

    for (let letter of array) {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            vowelArray.push(letter);
        }
    }
    const vowels = vowelArray.length;
    return vowels;
}

const vowel = findVowels(sentence);
console.log('the number of vowels here :', vowel);