/* 
--------------Break----------

Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

*/

let sum = 0;
for (let i = 1; i <= 20; i++) {
    sum += i;
    console.log(i);
    if (sum >= 100) {
        break;

    }
    console.log('sum:', sum);

}
console.log('sum:', sum);




/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let mul = 0;
for (let i = 1; i <= 20; i++) {
    // console.log(i);
    mul = i * i;
    if (mul >= 100) {
        break;

    }
    console.log(i, 'square value:', mul);

}
// console.log(i, 'square value:', mul);
