// Membuat Class inheritance
class Employee{
    // Menambahkan Constructor
    constructor(level, firstname){
        // Menambahkan Property
        this.firstname = firstname
        this.level = level
    }

    // Menambahkan method
    sayHello(name){
        console.log(`Hai ${name} my name is ${this.firstname} i'm ${this.level}`)
    }
}

class Manager extends Employee{
    // Menggunakan super constructor untuk memanggil property parent
    constructor(level, firstname,  lastname){
        super(level,firstname )
        this.lastname = lastname
    }
    // Menggunakan super constructor untuk memanggil method parent
    sayHello(name){
        console.log(`Hai ${name} my name is ${this.firstname} ${this.lastname} i'm ${this.level}`)
    }
}

const yp = new Employee("Employee", "Yp")
const farhan = new Manager("Manager", "Farhan","Yudha")

yp.sayHello("budi")
farhan.sayHello("Maman")