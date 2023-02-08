// Anonymous Function
// let say = function(name){
//     console.log(name)
// }

// say("farhan")


// Anonymous function sebagai parameter
function functionLain(callback){
    callback("farhan")
}


functionLain( function(name){
    console.log(name)
})
