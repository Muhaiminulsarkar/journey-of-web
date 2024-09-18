// console.log('checked')


document.getElementById('button-login').addEventListener('click', function (event) {

    event.preventDefault();
    console.log('button clicked')
    
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);


})