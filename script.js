// initialize an empty array to store todos
let todos = [];
        
//function render todos to the ui
function renderTodos() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    // Loop through each todo item and render it to the UI
    todos.forEach((todo,index) =>{
        const li = document.createElement("li");
        li.textContent = todo.text;

        //click event
        li.addEventListener("click", () => toggleTodoCompleted(index));

        if(todo.completed){
            li.style.textDecoration = "line-through";
        }

        todoList.appendChild(li)
    });
}

// add a new todo
function addTodo(text){
    todos.push({
        text, completed: false
    });
    renderTodos();
}

// completed statue
function toggleTodoCompleted(index){
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

// Event Listener
document.getElementById("todo-form").addEventListener("submit",function(event){
    event.preventDefault();

    const input = document.getElementById("todo-input");
    const text = input.value.trim();
    if(text !== "")
    {
        addTodo(text);
        input.value = "";
    }

});


renderTodos()

