// Membuat Class
class Person{
    // Menambahkan Constructor
    constructor(name){
        // Menambahkan Property
        this.name = name
    }

    // Menambahkan method
    sayHello(name){
        console.log(`Hai ${name} my name is ${this.name}`)
    }
}

const yp = new Person("YP")
yp.sayHello("budy")