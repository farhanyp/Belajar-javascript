// Membuat private

class Person{

    say(name){
        if(name){
            this.#sayWithName(name)
        }else{
            this.#sayWithName()
        }
    }

    #sayWithName(name){
        console.log(`Hello ${name}`)
    }

    #sayWithoutName(){
        console.log(`Hello`)
    }
}

const yp = new Person()
yp.say()