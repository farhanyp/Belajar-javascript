// Contoh penggunaan NUMBER


let string_number = "12345"
let number = Number(string_number)
console.log(string_number)
console.log(number)

// Static Property pada number
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_VALUE)

// Static Method pada number
console.log(Number.isNaN(string_number))
console.log(Number.isInteger(number))

// Instance Method pada number
console.log(number.toString(2))