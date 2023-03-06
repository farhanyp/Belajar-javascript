// Element Property
// const content = document.getElementById('content')
// console.log(content.id)
// console.log(content.className)
// console.log(content.tagName)

// Create Element paragraph
const content = document.getElementById('content')
const text = document.createElement('p')
text.textContent = "lorem ipsum blabalba"
content.append(text)

// Create element title
const title = document.createElement('h2')
title.textContent = "ini h2"
content.append(title)

// Element Method
text.remove()
title.remove()
