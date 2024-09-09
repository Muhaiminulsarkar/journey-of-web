/**
 * array has some duplicate elements
 * []
*/

const biryaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDuplicate(array) {
    let unique = [];
    for (let value of array) {
        if (unique.includes(value) === false) {
            unique.push(value);
        }
    }
    return unique;
}

const array = noDuplicate(numbers);
const array2 = noDuplicate(biryaniKhor);
console.log(array, array2);