// Contoh penggunaan Array

const name = ["farhan", "yudha", "pratama"]

// menggunakan anonymous function
name.forEach(function(value, index){
    console.log(`Index ke ${index}, dengan isi ${value}`)
});

// Menggunakan arrow function
name.forEach((value,index) => console.log(`Index ke ${index}, dengan isi ${value}`))

name.forEach((value) => console.log(`dengan isi ${value}`))