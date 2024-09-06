/* 

Task-5 (Hard)
Loop through an object and print the key-value pairs with their types

Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

*/

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

let property = Object.keys(myObject);
// console.log(property);

for (let prop of property) {
    console.log('key:', prop, ' | ', 'type:', typeof (myObject[prop]));
}