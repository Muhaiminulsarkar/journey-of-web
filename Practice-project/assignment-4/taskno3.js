function checkDigitsInName(name) {
    // console.log(name);
    if (typeof (name) !== 'string' || name === " ") {
        const sms = "Invalid Input";
        return sms;
    }

    for (let i = 0; i < name.length; i++) {
        const letter = name[i];
        const type = isNaN(letter);
        // console.log(letter, type);
        if (type !== true) {
            return true;
        }
        else continue
        
    }
    return false;

}

const names = '123';
const result = checkDigitsInName(names);
console.log(result);