// Mengirim data ke request menggunakan ajax memakai URL Param
function doLogin(){
    const ajax = new XMLHttpRequest()
    ajax.open("POST", "https://eog8j6v8yu28mew.m.pipedream.net")

    const param = new URLSearchParams()
    param.append("username", document.getElementById('username').value)
    param.append("password", document.getElementById('password').value)

    ajax.send(param)
}

document.getElementById('login').onclick = doLogin