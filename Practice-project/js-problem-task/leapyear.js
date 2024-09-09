
function leapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log(year, 'is a leap year')
    }
    else
        console.log(year, 'is not a leap year')
}

leapYear(2000);
leapYear(2004);
leapYear(2024);
leapYear(2025);
leapYear(2024);
// console.log(leapyear);