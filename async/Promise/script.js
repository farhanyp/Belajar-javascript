// Promise

function displayProduct(promise){
    for (let i = 0; i < promise.length; i++) {
        const table = document.getElementById('table')
        const tr = document.createElement('tr')
        table.appendChild(tr)

        const tdId = document.createElement('td')
        tdId.textContent = `ID: ${promise[i].id}`
        tr.appendChild(tdId)

        const tdName = document.createElement('td')
        tdName.textContent = `Name: ${promise[i].nama}`
        tr.appendChild(tdName)
        
    }
}

function getProduct(data){
    
    return new Promise(function(resolve, reject){
        const ajax = new XMLHttpRequest()
    
        ajax.open("GET", `api/${data}.json`)
        ajax.onload = function(){
            if(ajax.status === 200){
                resolve(JSON.parse(ajax.responseText))
            }else{
                reject("Error")
            }
        }
        ajax.send()
        
    })
}

// Mengambil isi dari promise
// getProduct("data1").then((respon) => console.log(respon))

// Mengambil isi dari promise secara sekaligus
const promise = Promise.all([
    getProduct("data1"),
    getProduct("data2"),
    getProduct("data3")
])

promise.then((respon) => displayProduct(respon)).catch((respon) => `Error: ${respon.status}`).finally("Ini finally ")