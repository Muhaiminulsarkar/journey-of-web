// 3. Checking Array Membership with ‘includes’
// Instructions:

// *Create an array of books containing different book.

// *Use the includes method to check if the array contains a javascript book.

// *Print a message to the console indicating whether the element is present in the array or not.

// ** here i replace the book to place

let places = ['dhaka', 'khulna', 'coxs', 'ctg', 'sylhet', 'rangpur']

console.log(places);

console.log(places.includes('dhaka'));

if (places.includes('dhaka')) {
    console.log('You can go there');
}
else console.log('Its absent here. so you cant go there');