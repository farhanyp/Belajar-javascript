// array untuk menyimpan data
const todolistValue = []

// Menangkap Table Body
const todolistBody = document.getElementById('todolistBody')

// Menampilkan data sesuai filtering
filter.onkeydown = function(){
    getTodolist()
}
filter.onkeyup = function(){
    getTodolist()
}

// Clear data todolist
function clearTodolist(){
    while(todolistBody.firstChild){
        todolistBody.removeChild(todolistBody.firstChild)
    }
}

// Remove todolist
function removeTodolist(index){
    todolistValue.splice(index, 1)
    getTodolist()
}

// Menampilkan data todolist ke halaman
function showTodolistToHTML(index, todo){
    // Membuat tr
    const tr = document.createElement('tr')
    todolistBody.appendChild(tr)

    //Membuat td Button
    const tdButton = document.createElement('td')
    const button = document.createElement('input')
    button.type= 'button'
    button.value = 'Done'
    button.onclick = function(){
        removeTodolist(index)
    }
    tr.appendChild(tdButton)
    tdButton.appendChild(button)

    // Membuat td todolist
    const tdValue = document.createElement('td')
    tdValue.textContent = todo
    tr.appendChild(tdValue)
}

// mengambil data dari array
function getTodolist(){

    clearTodolist()

    for(let i = 0; i < todolistValue.length; i++){
        const todo = todolistValue[i]

        // Filter data sebelum ditampilkan
        const filter = document.getElementById('filter').value.toLowerCase()
        if(todo.toLowerCase().includes(filter)){
            showTodolistToHTML(i, todo)
        }
    }
}

// Menangkap data todolist
document.forms['todolistForm'].onsubmit = function(event){
    event.preventDefault()

    const todo = document.forms['todolistForm']['todolist'].value
    todolistValue.push(todo)

    document.forms['todolistForm'].reset()

    getTodolist()
}


