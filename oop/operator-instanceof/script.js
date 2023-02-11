// Menggunakan instanceof untuk mengecek instance dari class mana

class Animals{

}

class Tree{

}

class Human extends Tree{


}

const dog = new Animals()
const farhan = new Human()
const pohon = new Human()

console.log(dog instanceof Animals) // True
console.log(farhan instanceof Animals) // False
console.log(pohon instanceof Human) // True karena child dari Tree
