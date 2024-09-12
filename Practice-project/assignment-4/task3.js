function checkDigitsInName(name) {

    if (typeof (name) !== 'string') {
        const sms = "Invalid Input";
        return sms;
    }

    const arr = [ ];
    for (let i = 0; i < name.length; i++) {
        const letter = name[i];
        arr.push(letter);
    }
    console.log(arr);

   console.log(arr[4])
}

const names = "Name2024";
const result = checkDigitsInName(names);
console.log(result);

const type = (isNaN(' '));
console.log(type);


