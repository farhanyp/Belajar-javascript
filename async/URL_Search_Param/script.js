// Menggunakan URL Search Param
function doSearch(){
    const ajax = new XMLHttpRequest()
    const param = new URLSearchParams()

    param.append("search", document.getElementById('search').value)
    ajax.open("GET", `https://eog8j6v8yu28mew.m.pipedream.net/?${param.toString()}`)
    ajax.onload = function(){
        console.log(ajax.responseText)
    }


    ajax.send()
}

document.getElementById('buttonSearch').onclick = doSearch