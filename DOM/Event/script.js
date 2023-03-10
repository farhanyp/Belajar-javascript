// Event

const canvas = document.getElementById('canvas')
const text = document.getElementById('text')

canvas.onclick = function(Event){
    text.textContent = `You in position ${Event.x} and ${Event.y}`
}
