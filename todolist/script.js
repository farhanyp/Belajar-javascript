// Variabel untuk menampung data todolist
const todolistValue = []

// Menangkap body table
const todolistBody = document.getElementById('todolistBody')

// Menghapus data
function deleteTodolist(index){
    todolistValue.splice(index, 1)
    displayTodolist()
}

// Clear data sebelum ditampilkan
function clearTodolist(){
    while(todolistBody.firstChild){
        todolistBody.removeChild(todolistBody.firstChild)
    }
}

// Create elemen untuk di tampilkan ke halaman
function createDataTodolist(index){
    const tr = document.createElement('tr')
        todolistBody.appendChild(tr)

        const tdButton = document.createElement('td')
        tr.appendChild(tdButton)

        const button = document.createElement('input')
        button.type = 'button'
        button.value = 'Done'
        button.onclick = function(){
            deleteTodolist(index)
        }
        tdButton.appendChild(button)

        const tdValue = document.createElement('td')
        tdValue.textContent = todolistValue[index]
        tr.appendChild(tdValue)
}

// Menampilkan data ke halaman
function displayTodolist(){

    clearTodolist()

    for (let i = 0; i < todolistValue.length; i++) {
        
        // Menangkap input search
        const search = document.getElementById('search').value.toLowerCase()

        if(todolistValue[i].toLowerCase().includes(search)){
            createDataTodolist(i)
        }


    }
}

// Menangkap data todolist
document.forms['todolistForm'].onsubmit = function(e){
    e.preventDefault()

    const todo = document.forms['todolistForm']['todolist'].value
    todolistValue.push (todo)

    document.forms['todolistForm'].reset()

    displayTodolist()

}

search.onkeydown = function (){
    displayTodolist()
}

search.onkeyup = function (){
    displayTodolist()
}



