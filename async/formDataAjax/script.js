// Mengirim data ke request menggunakan ajax memakai URL Param
function doLogin(){
    const ajax = new XMLHttpRequest()
    ajax.open("POST", "https://eog8j6v8yu28mew.m.pipedream.net")

    ajax.onload = function(){
        console.log("Your data insert")
    }

    const form = new FormData()
    form.append("username", document.getElementById('username').value)
    form.append("name", document.getElementById('name').value)

    const files = document.getElementById('file').files
    const firstFile = files.item(0)

    form.append("file", firstFile)

    ajax.send(form)
}

document.getElementById('login').onclick = doLogin