// Reflect

const person = {}

Reflect.set(person, "firstname", "Farhan")
Reflect.set(person, "lastname", "Yp")

console.log(Reflect.has(person,"firstname"))