// export default function Todo({ task, isDone }) {
//     console.log(isDone);
//     return (
//         <div>
//             <li>Task : {task} , Process: {isDone}</li>
//         </div>
//     )
// }




// conditional rendering option 1:
// -----------------------------------------------------

// export default function Todo({ task, isDone }) {
//     if (isDone === true) {
//         return <li>Finished the task of {task}</li>
//     }
//     else {
//         return <li>Working running of {task}</li>
//     }

// }




// conditional rendering option 2:
// ---------------------------------------------

// export default function Todo({ task, isDone }) {
//     if (isDone) {
//         return <li>Finished the task of {task}</li>
//     }

//     return <li>Working running of {task}</li>
// }



// conditional rendering option 3: (ternary operator)
// -----------------------------------------------------

// export default function Todo({ task, isDone }) {
//     return (
//         <li> {isDone ? 'Finished the task of' : 'Working running of'} - {task}</li>
//     )
// }




// conditional rendering option 4: && (it means - jodi tumar done hoy)
// --------------------------------------------------------------------

// export default function Todo({task,isDone}){
//     return (
//         <li>{task} {isDone && ': done'}</li> //(if its true then go) / (if the value before (&&) is true then go))
//     )
// }




// conditional rendering option 5: || (it means - jodi tumar done na hoy)
// -------------------------------------------------------------------------

// export default function Todo({ task, isDone }) {
//     return (
//         <li>{task} {isDone || ': do it'}</li> //(if its not true or false then go)
//     )
// }



// conditional rendering option 6:
// -------------------------------------

export default function Todo({ task, isDone }) {
    let listItem;
    if (isDone) {
        listItem = <li>Finished the task of {task}</li>
    }
    else {
        listItem = <li>Working running of {task}</li>
    }
    return listItem;

}


