// HTML From

// Tanpa HTML From
// document.querySelector('form[name=commentForm]').onsubmit = function(event){
//     const commentList = document.getElementById("commentList")
//     const comment = document.getElementById("comment").value
//     const from = document.getElementById("from").value

//     const commentItem = document.createElement("p")
//     commentItem.textContent = `${comment} - ${from}`
//     commentList.appendChild(commentItem)

//     document.forms['commentForm'].reset()

//     event.preventDefault()
// }

// Menggunakan HHTML From
document.forms['commentForm'].onsubmit = function(event){
    event.preventDefault()

    const commentList = document.getElementById("commentList")
    const comment = document.forms['commentForm']['comment'].value
    const from = document.forms['commentForm']['from'].value

    const commentItem = document.createElement("p")
    commentItem.textContent = `${comment} - ${from}`
    commentList.appendChild(commentItem)

    document.forms['commentForm'].reset()

    
}

