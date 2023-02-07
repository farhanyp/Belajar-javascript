// Menggunakan Closure

function sayHello(value){
    const say = value

    function helloo(name){
        console.log(`${say} ${name}`)
    }

// Closure yaitu menjadi inner function menjadi return value di outer function
    return helloo
}


const say = sayHello("Hai")
console.log(say("Farhan"))