//const uuidv4 = require("./uuidv4")

 let todos = getSavedTodos()

 const filters = {
     searchText: '',
     hideCompleted: false
 }

renderTodos(todos,filters)

document.querySelector('#search-text').addEventListener('input' , function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.text.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)

})






/*  const show_check = document.querySelector("#show")

 const todoJSON = localStorage.getItem("todo")
 if(todoJSON != null) {todos = JSON.parse(todoJSON)}
 

  document.querySelector("#tasks").addEventListener('submit', function(e) {   
    set_item(e)
} )

document.querySelector("#tasks_complete").addEventListener('submit', function(e) {
    remove_item(e)
} ) 

document.querySelector('#show').addEventListener('change', function(e) {
    change_button(e)
})
 */
       





 
 /*    buttom_task = document.createElement('input')
    buttom_task.type = 'checkbox'
    buttom_task.id = "amit"
    document.querySelector("#open_tasks").appendChild(buttom_task)
    document.querySelector("#amit").addEventListener('change', function(e){
        console.log("check")
    }) */
 
 
    




/*     document.querySelector('#new-todo-text').addEventListener('input', function (e) {
        console.log(e.target.value)
    })

    document.querySelector('#search-text').addEventListener('input', function (e) {
        filters.searchText = e.target.value
    }) */





//const summary = document.createElement('h2')
//summary.textContent = 'you have ${incompleTodos.length} todos left' 

/* const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
})

const incompleTodos = filteredTodos.filter(function (todo) {
    return !todo.completed
})

document.querySelector('#todos').innerHTML = ''

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleTodos.length} todos left`
document.querySelector('#todos').appendChild(summary)

filteredTodos.forEach(function(todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('#todos').appendChild(p)
}) */
