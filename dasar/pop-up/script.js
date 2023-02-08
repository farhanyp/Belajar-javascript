// Membuat pop

let cekLogin = confirm("Apakah anda ingin masuk ?")

let name;

if(cekLogin){
    name = prompt("Siapa nama anda?")
    alert(`Selamat datang ${name}`)
}else{
    alert(`Selamat tinggal`)
}