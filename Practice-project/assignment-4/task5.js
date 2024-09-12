function waitingTime(waitingTimes, serialNumber) {
    console.log(waitingTimes.length, serialNumber);

    if ((Array.isArray(waitingTimes) !== true) || (typeof serialNumber !== 'number'))  {
        const sms = "Invalid Input";
        return sms;
    }

    const length = waitingTimes.length;
    let sum = 0;
    for (let time of waitingTimes) {
        // console.log(time);
        sum = sum + time;
    }
    // console.log(sum);
    const avg = sum / length;
    const round = Math.round(avg);
    // console.log(round)

    const previousPerson = (serialNumber - 1);

    // console.log(previousPerson);
    const remainPerson = previousPerson - length;
    const result = remainPerson * round;
    // console.log(result);
    return result;
 
}

const arr = [7, 8, 3, 4, 5];
const result = waitingTime(arr, 7);
console.log(result);