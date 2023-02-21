// Materi JSON

const identity = {
    firstname: "farhan",
    middlename: "yudha",
    lastname: "pratama",
    address:{
        road:"menteng3",
        alley:"mangga"
    }
}

// Convert ke JSON
const json = JSON.stringify(identity)

// Convert ke object
const toObject = JSON.parse(json)

console.log(toObject)