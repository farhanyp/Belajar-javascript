// // Contoh penggunaan Array
// const name = ["farhan", "yudha", "pratama"]

// // menggunakan anonymous function
// name.forEach(function(value, index){
//     console.log(`Index ke ${index}, dengan isi ${value}`)
// });

// // Menggunakan arrow function
// name.forEach((value,index) => console.log(`Index ke ${index}, dengan isi ${value}`))

// name.forEach((value) => console.log(`dengan isi ${value}`))



// // Penggunaan Queue
// const name = []

// name.push("farhan")
// name.push("Yudha")
// name.push("Pratama")

// console.log(name.shift())
// console.log(name.shift())
// console.log(name.shift())
// console.log(name.shift())


// Pengunaan Stack
// const name = []

// name.push("farhan")
// name.push("Yudha")
// name.push("Pratama")

// console.log(name.pop())
// console.log(name.pop())
// console.log(name.pop())
// console.log(name.pop())


// Penggunaan Array Search
// const alfabet = ['a','b','c','d','e','a','b','c','d','e']

// console.log(alfabet.find(value => value === 'd')) // mencari data berdasarkan kondisi
// console.log(alfabet.findIndex(value => value === 'd')) // mencari index berdasarkan kondisi
// console.log(alfabet.includes("e")) // mencari apakah terdapat data
// console.log(alfabet.indexOf("e")) // mencari apakah terdapat data
// console.log(alfabet.lastIndexOf("a")) // mencari apakah terdapat data



// Array Filter

const numbers = [1,2,3,4,5,6,7,8,9,10]

const ganjil = numbers.filter(value => value % 2 == 1)
const genap = numbers.filter(value => value % 2 == 0)

console.log(ganjil)
console.log(genap)