// 4. Checking if it's an Array
// Instructions:

// *Create different variables, each containing either an array or a non-array value.

// *Now use isArray to check if each variable is an array.

// *Print a message to the console indicating whether each variable is an array or not.


const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];

const nums = [];

const food = 'ros o gol l a';

const age = 15;

if ((Array.isArray(nums) === true) ||
    (Array.isArray(food) === true) ||
    (Array.isArray(friends)) === true ||
    (Array.isArray(age)) === true) {
    console.log('This variable contain a Array')
}
else {
    console.log('This variable dont contain a Array')
}