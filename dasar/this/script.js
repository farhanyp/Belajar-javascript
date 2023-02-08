// Penggunaan kata kunci this dalam global scope
console.log(this)

// Penggunaan kata kunci this dalam function
function sayhello(){
    console.log(this)
}

// Penggunaan kata kunci this dalam inner function
function sayhello2(){
    function inner(){
        console.log(this)
    }

    inner()
}

const names = {
    name: "farhan",
    sayHello: function(name){ console.log(`hai ${this.name}`)}
}

sayhello()
sayhello2()
names.sayHello("farhan")