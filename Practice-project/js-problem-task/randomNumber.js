
// const random = Math.round (Math.random()* 10) + 10;
// console.log(random);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const random = getRndInteger(20, 30);
console.log(random);