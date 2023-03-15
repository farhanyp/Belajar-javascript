// Json
// Get Data Json
// const ajax = new XMLHttpRequest();
// ajax.open("GET", "ajax/hello.json")
// ajax.addEventListener('load', function(){
//     const json = JSON.parse(ajax.responseText)
//     const header = document.getElementById('respons')
//     header.textContent = json.respon
// })
// ajax.send()


// Cek status ajax
// function displayRespons(json){
//     const header = document.getElementById('respons')
//     header.textContent = json.responn
// }

// const ajax = new XMLHttpRequest();
// ajax.open("GET", "ajax/helllo.json")
// ajax.addEventListener('load', function(){
//     if(ajax.status == 200){
//         const json = JSON.parse(ajax.responseText)
//         displayRespons(json)
//     }else{
//         displayRespons({
//             responn: `Terjadi kesalahan, status ${ajax.status}`
//         })
//     }

// })
// ajax.send()


// Mengirim data ke hookbin
function doLogin(){
    const ajax = new XMLHttpRequest()
    ajax.open("POST", "https://eog8j6v8yu28mew.m.pipedream.net")

        const json = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
    }

    console.log(json)

    ajax.send(JSON.stringify(json))
}

document.getElementById('login').onclick = doLogin
