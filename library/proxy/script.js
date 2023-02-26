// Proxy
// Membuat proxy yang berfungsi sebagai man in the middle jika mau mengakses data

// membuat handler proxy
// Membuat handle proxy adalah hal yang wajib

const target = {}

// Log Handler
const handler = {
    get: function(target , property){
        console.log(`Mengakses property: ${property}`)
        return target[property]
    },
    set: function(target, property, value){
        console.log(`Mengubah property: ${property} dengan value: ${value}`)

        // Validasi
        if(value == null){
            throw new Error("Tidak boleh null")
        }else{
            target[property] = value
        }
    }
}

// Membuat proxy
const proxy = new Proxy(target, handler)
proxy.firstname = "Farhan"
proxy.lastname = "Yp"

// Memanggil menggunakan proxy
document.writeln(proxy.firstname)
document.writeln(proxy.lastname)