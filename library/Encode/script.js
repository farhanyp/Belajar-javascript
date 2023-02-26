// Encode

{
    // const url = "www.google.com/?name= Farhan Yudha Pratama"
    // console.log(url)

    // // Menggunakan EncodeURI yang berfungsi melakukan encode tetapi tidak semua karakter
    // const encode = encodeURI(url)
    // console.log(encode)

    // // Mengembalikan encode dari encodeURI
    // const decode = decodeURI(encode)
    // console.log(decode)
}

{
    const url = "www.google.com/?name="
    const value = "Farhan Yudha &Pratama"
    console.log(url+value)

    // Menggunakan EncodeURIComponent yang berfungsi melakukan encode ke semua karakter
    const encode = encodeURIComponent(value)
    console.log(url+encode)

    // Menggunakan DecodeURIComponent yang mengembalikan Encode
    const decode = decodeURIComponent(encode)
    console.log(url+decode)
}