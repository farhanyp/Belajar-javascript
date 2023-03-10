// Type node

const selects = document.body.childNodes

for(let select of selects){
    console.log(`node: ${select}, type: ${select.nodeType}`)
}