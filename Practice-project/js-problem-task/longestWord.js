

let sentence = ' I am learning Programming to become a programmer ';

function longestWord(sentence) {
    const array = sentence.split(" ");
    console.log(array);
    let longest = 0;
    let longestWord = null;
    for (let word of array) {
        console.log(word);
        let len = word.length;
        if (len > longest) {
            longest = len;
            longestWord = word;
        }

    }
    return longestWord;

}

const bigWord = longestWord(sentence);
console.log('The longest word is :', bigWord);