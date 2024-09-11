function waitingTime(waitingTimes, serialNumber) {
    console.log(waitingTimes, serialNumber);

    if ((Array.isArray(waitingTimes) !== true) || (typeof serialNumber !== 'number')) {
        const sms = "Invalid Input";
        return sms;
    }

}

const arr = [3, 5, 7, 11, 6];
const result = waitingTime(arr, 10);
console.log(result);