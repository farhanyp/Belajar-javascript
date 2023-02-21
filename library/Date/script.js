// Materi Date

{
// Create Date
// Membuat date saat ini
console.log(new Date)

// Membuat date dengan tanggal
console.log(new Date(2023, 2, 21))

// Membuat date dengan parameter sampai mili second
console.log (new Date(2023, 2, 21, 5, 21, 30, 200))

// Membuat date dari epoch atau unix timestamp
console.log(new Date(1676969124))
}

{
    // Create epoch & unix timestamps
    
    // konversi format date saat ini menghasilkan timestamps
    const timeNow = new Date()
    console.log(timeNow.getTime())

    // konversi dari timestamps ke format date
    console.log(new Date(timeNow))

    // Mengambil date saat ini dengan keluarn timestamps
    console.log(Date.now())
    
    }