function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => display(data))
}

function display(users) {
    const ul = document.getElementById('users-list');
    for (let user of users) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerHTML = user.name;
        ul.appendChild(li);
    }
}