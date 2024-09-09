/* 

Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.

*/

function celTofar(value) {
    const Fahrenheit = value * (9 / 5);
    const result = Fahrenheit + 32;
    return result;
}

const Fahrenheit = celTofar(5);
console.log(Fahrenheit);