// Menggunakan rest parameter
function sum(fruit, ...datas){
    let result = 0;

    for(let data of datas){
        result+=data
    }

    document.writeln(`<p>${fruit} = ${result}</p>`)
}

sum("Appel", 2,3,4,5,6,7,8,9,1,10)

// Tidak bisa memasukan varibel array kedalam rest parameter harus menggunakan spread syntax
const numbers = [1,2,3,4,11,22,33]

sum("Pisang", ...numbers)


