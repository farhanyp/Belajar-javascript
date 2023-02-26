// Base 64

const url = "Farhan Yudha Pratama"
console.log(url)

const encode1 = btoa(url)
console.log(encode1)
const encode2 = btoa(encode1)
console.log(encode2)
const encode3 = btoa(encode2)
console.log(encode3)


const decode1 = atob(encode3)
console.log(decode1)
const decode2 = atob(encode2)
console.log(decode2)
const decode3 = atob(encode1)
console.log(decode3)

