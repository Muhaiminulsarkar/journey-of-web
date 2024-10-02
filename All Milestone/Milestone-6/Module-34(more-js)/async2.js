const { filterSeries } = require("async");

const myLoader = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random();
        if (success <= 0.5) {
            resolve(success)
        }
        else {
            reject(success)
        }
    })
}

myLoader()
    .then(data => console.log('resolve data', data))
    .catch(err => console.log('rejected with value', err))



// 1.this is the 1 way to get value by fetch

fetch('')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))



//2. this is the other way to get by using async function

async function loadData() {
    const res = await fetch('');
    const data = await res.json();
    console.log(data);
    return data;
}


//3. other way to get by using async arrow function

const taskLoader = async () => {
    const res = await fetch('');
    const data = await res.json();
    console.log(data);
}


// here call the fd=unction
loadData();
taskLoader();