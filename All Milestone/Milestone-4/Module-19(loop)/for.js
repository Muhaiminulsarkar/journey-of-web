
/**
 * for(    ;    ;    ){
 * }
 * 
 * 
 * for( first part ; second part ; third part){
    loop statement
}
 * 
 *
 * 
 * for (loop variable declaration ; loop condition) 
*/
// let num = 0; // loop variable
// while(num < 5) {  // loop condition
//     console.log(num); // loop statement
//     num++; // loop variable change
// }

// for(let num = 0; num < 5; num++){
//     console.log(num);
// }

// for (let i = 0; i < 5; i+=3) {
//     console.log(i);
//    }
const array = [1, 2, 3, 4, 5, 6, 7];
for (let i = 1; i < array.length; i++) {
    if (i == 5) {
        continue;
    }
    console.log(array[i]);
}