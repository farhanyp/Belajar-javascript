// Materi Map

const map = new Map()
// menset isi dari map
map.set("name1", "Farhan Yudha Pratama")
map.set("name2", "Farhan Yp")

// Mengiterasi map
map.forEach((value, key) => console.log(`key: ${key} value:${value}`))

// Cek banyak data di map
console.log(map.size)

// Mendapatkan data map berdasarkan key
console.log(map.get("name2"))

// Cek apakah map mempunyai data berdasarkan key
console.log(map.has("name1"))

// Mendelete data map berdasarkan key
map.delete("name1")
map.forEach((value, key) => console.log(`key: ${key} value:${value}`))

// mengclear data map
map.clear()
map.forEach((value, key) => console.log(`key: ${key} value:${value}`))
