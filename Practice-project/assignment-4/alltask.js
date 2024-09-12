

function calculateTax(income, expenses) {

    if (income < 0 || expenses < 0 || expenses > income) {
        const sms = "Invalid Input";
        return sms;
    }

    const different = income - expenses;
    const tax = different * (.20);
    return tax;

}




function sendNotification(email) {

    if (email.includes('@') === false) {
        const sms = "Invalid Input";
        return sms;
    }

    const arr = email.split('@');
    const name = arr[0];
    const mail = arr[1];

    const msg = name + ' sent you an email from ' + mail;
    return msg;

}



function checkDigitsInName(name) {

    if (typeof (name) !== 'string' || name === " ") {
        const sms = "Invalid Input";
        return sms;
    }

    for (let i = 0; i < name.length; i++) {
        const letter = name[i];
        const type = isNaN(letter);
        if (type !== true) {
            return true;
        }
        else continue

    }
    return false;

}





function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        const sms = "Invalid Input";
        return sms;
    }

    const testMark = obj.testScore;
    const schoolMark = obj.schoolGrade;
    const checkFarmer = obj.isFFamily;
    if (checkFarmer === true) {   
        const bonusMark = 20;
        const total = testMark + schoolMark + bonusMark;
        if (total >= 80) {
            return true
        }
        else return false
    }
    else if ((schoolMark + testMark) >= 80) {
        return true;
    }
    else return false;

}



function waitingTime(waitingTimes, serialNumber) {

    if ((Array.isArray(waitingTimes) !== true) || (typeof serialNumber !== 'number') || (serialNumber <= waitingTimes.length)) {
        const sms = "Invalid Input";
        return sms;
    }

    const length = waitingTimes.length;
    let sum = 0;
    for (let time of waitingTimes) {
        sum = sum + time;
    }

    const avg = sum / length;
    const round = Math.round(avg);
    const previousPerson = (serialNumber - 1);
    const remainPerson = previousPerson - length;
    const result = remainPerson * round;

    return result;

}