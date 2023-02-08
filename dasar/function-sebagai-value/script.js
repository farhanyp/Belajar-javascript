// Function dimasukan ke variabel
function sayHello(name){
    console.log(name)
}

sayHello("yp")
const say = sayHello
say("yp2")

// Function sebagai parameter

function funLain(callback){
    callback("yp3")
}

funLain(sayHello)