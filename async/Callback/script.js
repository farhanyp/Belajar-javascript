// SetTimeout
// function setTime (){
//     const header = document.getElementById('header')
//     header.textContent = "Ini set time out"
// }
// setTimeout(setTime, 5000)


// SetInterval
function setTime(){
    const header = document.getElementById('header')
    header.textContent = new Date().toLocaleString()
}

setInterval(setTime,1000)

console.log("program selesai")