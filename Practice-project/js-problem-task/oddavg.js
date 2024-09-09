/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
*/

/**
 * 1. put odd numbers in an array
*/

function oddavg(numbers) {
    const odd = [];
    for (let num of numbers) {
        if (num % 2 === 1) {
            odd.push(num);
        }
    }
    console.log(odd);
    let sum = 0;
    for (let num of odd) {
        sum = sum + num;
    }
    const avg = sum / odd.length;
    return avg

}

const numbers = [2, 13, 8, 65, 81, 6, 7];
const result = oddavg(numbers);
console.log(result);

