// Json
// Get Data Json
const ajax = new XMLHttpRequest();
ajax.open("GET", "ajax/hello.json")
ajax.addEventListener('load', function(){
    const json = JSON.parse(ajax.responseText)
    const header = document.getElementById('respons')
    header.textContent = json.respon
})
ajax.send()