// Destructering Array
// {
// const names = ["Farhan","Yudha","Pratama","Adi","mamank"]

// const [first,middle,last, ...others] = names

// console.log(first)
// console.log(middle)
// console.log(last)
// console.log(others)
// }

// Destructering Object
// {
//     const names = {
//     firstname : "Farhan",
//     middlename : "Yudha",
//     lastname : "Pratama",
//     addres: {
//         city: "Medan",
//         alley: "suci"
//     },
//     addres2: {
//         city: "Pwt",
//         alley: "anjay"
//     },
// }

// Destructering objectt nested
// const {firstname, middlename,lastname,addres: {city, alley}, ...others} = names

// console.log(firstname)
// console.log(middlename)
// console.log(lastname)
// console.log(city)
// console.log(alley)
// console.log(others)

// }

{
    // Destructering parameter array dengan default value
function sayHello([name, age, addres = "jauh"]){
    console.log(`${name} ${age} ${addres}`)
}

sayHello(["farhan", 21])
}
