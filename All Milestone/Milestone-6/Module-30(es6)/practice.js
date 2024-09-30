// task -1: console log the secondary school location of Sophia 
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}

// console.log(data.Sophia.study[1].secondary[1].location);

// task-2: console .log  output: Petersburg, Herry

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}


// console.log(students['2222'].address['city'], ' & ', students['3333'].name);


// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}

//---------------------------------------------
const array = [1, 3, 5, 7, 9];
let result = array.map(x => x + 1);
// console.log(result);


//---------------------------------------------
const array2 = [33, 50, 79, 78, 90, 101, 30];
let result2 = array2.filter(x => x % 10 === 0);
// let result2 = array2.find(x => x % 10 === 0);
// console.log(result2)


//----------------------------------------------
const instructor = [
    { name: 'Upoma', age: 24, position: 'senior' },
    { name: 'Parosh', age: 26, position: 'junior' },
    { name: 'Punni', age: 21, position: 'junior' },
];

let solve = instructor.filter(x => x.position === 'junior');
// console.log(solve)

//-------------------------------------------------

const instructor1 = [
    { name: 'Upoma', age: 20, position: 'senior' },
    { name: 'Parosh', age: 15, position: 'junior' },
    { name: 'Punni', age: 22, position: 'junior' },
];

let solve2 = instructor1.reduce((a, c) => a + c.age, 0);
console.log(solve2)

//-------------------------------------------------