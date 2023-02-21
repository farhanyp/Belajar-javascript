// Menggunakan Object
{
    // Menggunakan freeze dan seal

const name = {
    firstname : "farhan",
    lastname : "yp"
}

// membuat object tidak bisa diubah, dihapus attributenya bahkan ditambah
// Object.freeze(name)


// membuat object tidak bisa diubah dan ditambah
// Object.seal(name)

name.firstname = "yudha"
delete name.lastname

console.log(name)

}

{
    // Menggunakan Object.assign

    const name1 = {
        firstname: "farhan"
    }

    const name2 = {
        lastname: "yp"
    }

    // Menggabungkan 2 object
    Object.assign(name1, name2)

    console.log(name1)
}