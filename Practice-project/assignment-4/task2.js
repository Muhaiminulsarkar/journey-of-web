

function sendNotification(email) {

    if (email.includes('@') === false) {
        const sms = "Invalid Input";
        return sms;
    }

    const arr = email.split('@');
    const name = arr[0];
    const mail = arr[1];

    const msg = name + ' sent you an email from ' + mail;
    return msg;
    
}

const mail = "sadia8icloud.com";
const result = sendNotification(mail);
console.log(result);

