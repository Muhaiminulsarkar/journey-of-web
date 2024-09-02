/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */

let sum = 0;
for (let i = 91; i <= 129; i = i + 2) {
    console.log(i);
    sum = sum + i;
    // console.log('sum:', sum);
}
console.log("Total Sum is:", sum)


/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

let sum1 = 0;
for (let i = 51; i <= 85; i++) {
    if (i % 2 === 0) {
        console.log(i);
        sum1 = sum1 + i;
    }
}
console.log("Total Sum is:", sum1);
