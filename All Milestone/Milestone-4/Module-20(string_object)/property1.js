let person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}

// console.log(person.name);
// console.log(person['age']);
// console.log(person['fav places']);

// person.age = 35;

// console.log(person['age']);

// let update = person['fav places'].push('coxs');
// console.log(person);

const keys = Object.keys(person);

const values = Object.values(person);

console.log(keys);

console.log(values);

