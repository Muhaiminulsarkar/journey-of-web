/* 

You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0

*/


const numbers = [5, 6, 11, 12, 98, 5]
const findNumber = 25;

function noDuplicate(array, find) {
    let unique = [];
    for (let value of array) {
        if (value === find) {
            unique.push(value);
        }
    }
    let output = unique.length;
    return output;
}

const array = noDuplicate(numbers, findNumber);
console.log(array);