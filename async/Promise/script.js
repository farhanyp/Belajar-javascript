// Promise

const promise = new Promise(function(resolve, reject){
    const ajax = new XMLHttpRequest()

    ajax.open("GET", "api/data.json")
    ajax.onload = function(){
        if(ajax.status === 200){
            resolve(ajax.responseText)
        }else{
            reject("Error")
        }
    }

    ajax.send()
    
})

console.log(promise)