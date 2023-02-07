// Memasukan function kedalam object

const names = {
    name: "farhan",
    sayHello: (name) => console.log(`hai ${name}`)
}

console.log(names.name)
console.log(names.sayHello(names.name))