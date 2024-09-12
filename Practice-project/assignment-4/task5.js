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

const arr = [7, 8, 3, 4, 5];
const result = waitingTime(arr, '7');
console.log(result);