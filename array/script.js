// Membuat Array
const Array = []
const name = ["Farhan", "Yp", "Farhan Yp"]

// Memasukan data
Array.push("masukan1")
Array.push("masukan2")
Array.push("masukan3")
Array.push("masukan4")

// Melihat panjang array
document.writeln(Array.length)

// Mengambil data array
document.writeln(Array[1])

// Mengganti data di array
Array[3] = 'Ini diganti '

// Menghapus data di array
delete Array[1]

console.table(Array)