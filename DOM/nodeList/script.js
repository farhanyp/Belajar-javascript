// NodeList
// const menu = document.querySelectorAll('li')
// console.log(menu)

// NodeList Live
// const menu1 = document.getElementById('menu1')
// menu1.append(document.createElement('li'))
// menu1.append(document.createElement('li'))
// console.log(menu1)

// Nodelist Static
let list = document.querySelectorAll('li')
const menu2 = document.getElementById('menu2')
menu2.append(document.createElement('li'))
menu2.append(document.createElement('li'))

console.log(list) // li tidak bertambah

list = document.querySelectorAll('li')
console.log(list) // li bertambah