

function calculateTax(income, expenses) {

    if (income < 0 || expenses < 0 || expenses > income) {
        const sms = "Invalid Input";
        return sms;
    }

    const different = income - expenses;
    const tax = different * (.20);
    return tax;

}

const result = calculateTax(-4000,1753);
console.log(result);
