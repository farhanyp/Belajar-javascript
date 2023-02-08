// Menggunakan for in 

// Perulangan ini menghasilkan return value yaitu

const names = {
    firstname : 'Farhan',
    middlename : 'Yudha',
    lastname : 'Pratama'
}

for(name in names){
    console.log(`Ini ${name} = ${names[name]}`)
}

