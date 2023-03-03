// Export class

export class Person{
    constructor(name){
        this.name = name
    }

    sayHello(name) {
        console.log(`Hai ${name}, my name is ${this.name}`)
    }
}