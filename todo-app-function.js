//import uuidv4 from "./uuidv4"


//get rxisitong todos from local sotrage
const getSavedTodos = function () {
    const todoJSON = localStorage.getItem('todos')
    if(todoJSON != null) {
        return JSON.parse(todoJSON)
    }
    else {
        return []
    }
}

const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id == id
    })
    if(todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
    
    
}

const update_todos = function (id, checked) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id == id
    })
    todos[todoIndex].completed = checked
}


const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//Render application todos based on filters


const renderTodos = function(todos, filters) {
    const filterTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filterTodos.filter(function (todo) {
        return !todo.completed
    
})

document.querySelector('#todos').innerHTML = ''
const summary = document.createElement('h2')
summary.textContent =  `you have ${incompleteTodos.length} todos left`
document.querySelector('#todos').appendChild(summary)


filterTodos.forEach(function (todo) {
    document.querySelector('#todos').appendChild(genarateTodoDOM(todo))
    })
}

// Get the DOM elements for an individual note
const genarateTodoDOM =  function (todo) {
    const notel = document.createElement('div')
    const todoText = document.createElement('a')
    const checkbox = document.createElement('input')
    checkbox.checked = todo.completed
    checkbox.addEventListener('change', function(e) {
        update_todos(todo.id, checkbox.checked)
        saveTodos(todos)
        renderTodos(todos, filters)
        
    })

    const removeButton = document.createElement('button')
    removeButton.textContent = 'x'
    removeButton.addEventListener("click", function(e) {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    checkbox.setAttribute('type', 'checkbox')
    todoText.textContent = todo.text
    todoText.setAttribute('href', `/edit.html#${todo.id}`)
    notel.appendChild(checkbox)
    notel.appendChild(todoText)
    notel.appendChild(removeButton)
    return notel
}

//get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContect = `you have ${incompleteTodos.length} todos left`
    return summary
}




















/* 

show_tasks = function(todos) {
    document.querySelector("#open_tasks").innerHTML = '' 
    todos.forEach(function(value, index) {
        task_toshow = document.createElement('span')
        task_toshow.textContent =  `${index}.` + value.task + " "
        document.querySelector("#open_tasks").appendChild(task_toshow) 
        const button_task = document.createElement('button')
        button_task.textContent = 'x'
        button_task.id = index + "_task"
        document.querySelector("#open_tasks").appendChild(button_task) 
        line = document.createElement('p')
        line.textContent = ' '
        document.querySelector("#open_tasks").appendChild(line) 

} )
}

const set_item = function(e) {
    e.preventDefault()
    todos.push({id: uuidv4(), "task" : e.target.elements.firstName.value, "done" : false})
    localStorage.setItem("todo", JSON.stringify(todos))
    if(show_check.checked) {show_tasks(todos)}
}

const remove_item = function(e) {
    e.preventDefault()
    index_toremove = todos.findIndex(function(value, index) {
        return value.task === e.target.elements.firstName.value
        
    })
    if(index_toremove >= 0) {
        todos.splice(index_toremove,1) }
        localStorage.setItem("todo", JSON.stringify(todos))
        show_tasks(todos)
}

const change_button = function(e)
{
    if(e.target.checked) {show_tasks(todos)}
    else{document.querySelector("#open_tasks").innerHTML = ''} 
} */