// Function generator
function* numberGanjil(value){
    const number= []
    for(let i = 1; i <= value; i++){
        if(i % 2 == 1){
            yield i
        }
    }
}

const numbers = numberGanjil(100)

for(number of numbers){
    console.log(number)
}

// bukan function generator
// Termasuk eager function
// function numberGanjil(value){
//     const number= []
//     for(let i = 1; i <= value; i++){
//         if(i % 2 == 1){
//             number.push(i)
//         }
//     }
//     return number
// }

// const numbers = numberGanjil(10)

// for(number of numbers){
//     console.log(number)
// }