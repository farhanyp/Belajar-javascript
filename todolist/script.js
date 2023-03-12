const todolistValue = []

// Menghapus jika memiliki child didalam body
function clearTodolist(){
    const todolistBody = document.getElementById('todolistBody')
    while(todolistBody.firstChild){
        todolistBody.removeChild(todolistBody.firstChild)
    }
}

function removeTodolist(index){
    todolistValue.splice(index,1)

    displayTodolist()

}


// memanggil todolist
function showTodolist(index, todo){
    const tr = document.createElement('tr')
    const tdButton = document.createElement('td')
    tr.appendChild(tdButton)

    const buttonValue = document.createElement('input')
    buttonValue.type = 'button'
    buttonValue.value = 'Done'
    buttonValue.onclick = function(){
        removeTodolist(index)
    }
    tdButton.appendChild(buttonValue)

    const tdValue = document.createElement('td')
    tdValue.textContent = todo
    tr.appendChild(tdValue)

    const todolistBody = document.getElementById('todolistBody')
    todolistBody.appendChild(tr)
}

// Menampilkan todo list
function displayTodolist(){
    clearTodolist()

    for(let i = 0; i < todolistValue.length; i++){
        const todo = todolistValue[i]

        const filter = document.getElementById('filter').value.toLowerCase()

        if(todo.toLowerCase().includes(filter)){
            showTodolist(i, todo)
        }



    }
}

// Menyimpan data ke array
document.forms['todolistForm'].onsubmit = function(event){
    event.preventDefault()

    const todolist = document.forms['todolistForm']['todolist'].value
    todolistValue.push(todolist)

    document.forms['todolistForm'].reset()

    displayTodolist()
}

// Filtering
const filter = document.getElementById('filter')
filter.onkeydown = function (){
    displayTodolist()
}
filter.onkeyup = function (){
    displayTodolist()
}

displayTodolist()
