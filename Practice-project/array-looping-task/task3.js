/* 

Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'

*/

let names = ['Tom', 'Tim', 'Tin', 'Tik']

let output = '';
for (let name of names) {
    // console.log(name);
    // output = concat(name);
    output = output + name.concat('')
}
console.log(output);
