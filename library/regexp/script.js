// Membuat Regex
// const regex1 = /[a]/
// const regex2 = new RegExp(/[a]/)
// const regex3 = new RegExp("[a]")


// Menggunakan modifier dan instance methods

// const name = "Farhan Yudha yudha Pratama"
// i digunakan untuk mencari incase sensitive
// g digunakan untuk mencari data selanjutnya
// const regex = /Yudha/ig

// Mencari data sesuai dengan pola yang kembaliannya adalah result
// console.log(regex.exec(name))

// Mencari data sesuai pola yang kembaliannya adalah boolean
// console.log(regex.test(name))

// let result
// while((result = regex.exec(name)) !== null){
//     console.log(result)
// }



// Advanced Regex
// const name = "Farhan Farhin farah farpe farue"
// const regex1 = /Far[aiueo]/ig

// let result
// while((result = regex1.exec(name)) !== null){
//     console.log(result)
// }



// Regex di String

const name = "Farhan Farhin farah farpe farue"

// Mencari semua data yang sesuai dengan regex
console.log(name.match(/Farh[aiueo]/ig))

// Mencari index data yang sesuai dengan regex
console.log(name.search(/Farh[aiueo]/ig))

// Mereplace data dengan value sesuai regex
console.log(name.replace(/Farh[aiueo]/ig,"di ubah"))

// Mereplace semua data dengan value sesuai regex
console.log(name.replaceAll(/Farh[aiueo]/ig,"ubah"))

// Memisha data dengan regex
console.log(name.split(/Farh[aiueo]/ig))