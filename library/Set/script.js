// Materi Set

const set = new Set()
// menset isi dari map
set.add("Farhan Yudha Pratama")
set.add("Farhan Yp")

// Mengiterasi map
set.forEach((value) => console.log(`value:${value}`))

// Cek banyak data di map
console.log(set.size)

// Cek apakah map mempunyai data berdasarkan key
console.log(set.has("Farhan Yudha Pratama"))

// Mendelete data map berdasarkan key
set.delete("Farhan Yp")
set.forEach((value) => console.log(`value:${value}`))

