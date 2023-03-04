// Import
// Mengimport module dan dijadikan object

import { sayHello } from "./library.js";

document.getElementById('sayButton').onclick = function(){
    name = document.getElementById('say').value
    import("./library.js").then(function(module){
        module.sayHello(name)
    })
}