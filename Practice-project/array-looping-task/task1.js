/* 

Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']

*/

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let reverse = [];
for (let color of colors) {
    console.log(color);
    reverse.unshift(color);
}
console.log(reverse);