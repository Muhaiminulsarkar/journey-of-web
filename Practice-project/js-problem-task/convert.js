// in a normal number
function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

const height = inchToFeet(75);
console.log(height)

// in a string number

function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchFraction = inch % 12;
    const result = feetNumber + ' feet ' + inchFraction + ' inch ';
    return result;
}

const height2 = inchToFeet2(75);
console.log(height2);



// miles to kilometer convert

function mileToKilo(value) {
    const kilo = value * 1.60934;
    return kilo;
}

const kilo = mileToKilo(5);
console.log(kilo);