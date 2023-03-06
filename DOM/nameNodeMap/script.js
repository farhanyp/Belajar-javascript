// namedNodeMap

const text = document.getElementById('text')
const attributes = text.attributes

for(let attribute of attributes){
    console.log(`name: ${attribute.name},  value: ${attribute.value}`)
}