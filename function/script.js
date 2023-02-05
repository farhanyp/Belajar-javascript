// Function tanpa parameter dan return value
function sayHello(){
    console.log("Hello dunia")
}

// Function tanpa return value
function sayHello2(name){
    console.log(`Hello dunia ${name}`)
}

// Function pakai parameter dan return value
function sum(value1, value2){
    console.log(`${value1} + ${value2} = ${value1 + value2}`)
}

// Function pakai optional parameter
function name(firstName, middleName, lastName){
    console.log(`hai ${firstName} `)
    console.log(`hai ${middleName} `)
    console.log(`hai ${lastName} `)
}

// Function pakai default parameter
function animals(firstAnimal, middleAnimal = "Koala"){
    console.log(`this is ${firstAnimal} `)
    console.log(`this is ${middleAnimal} `)
}


sayHello()
sayHello2("Farhan")
sum(2, 2)
name("farhan")
animals()
animals()
animals("maman")