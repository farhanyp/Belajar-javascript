// Operator instanceOf


class Person{

}

class Tree{

}

class Animals extends Person{

}

const farhan = new Person()
const pohon = new Tree()
const dog = new Animals()


console.log(farhan instanceof Person)//True
console.log(farhan instanceof Tree)//False
console.log(dog instanceof Person)//True karena dari extends dari Person

