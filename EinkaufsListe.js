//Selectors
const todoInput= document.querySelector(".todo-input");
const todoButton= document.querySelector(".todo-button");
const todoList= document.querySelector(".todo-list");


//Event Listener
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
//Functions

function addTodo(event){

event.preventDefault();
//div
const todoDiv =document.createElement('div');
todoDiv.classList.add ('todo');
//li
const newTodo=document.createElement('li');
newTodo.innerText= todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
//localStorage
saveLocalStorage(todoInput.value);

//button complete
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class= "fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

//button trash
const trashdButton = document.createElement('button');
trashdButton.innerHTML = '<i class= "fas fa-trash"></i>';
trashdButton.classList.add("trash-btn");
todoDiv.appendChild(trashdButton);

//append
todoList.appendChild(todoDiv);

//clear input
todoInput.value = "";


}
function deleteCheck(e){
const item = e.target;
//DELETE

if(item.classList[0]==='trash-btn'){

    const todo = item.parentElement;
    removeLocalTodos(todo);
    todo.remove();
}
//check

if (item.classList[0]==="complete-btn"){
const todo = item.parentElement;
todo.classList.toggle("completed");
}

}


function saveLocalStorage (todo){
//check
let todos;

if(localStorage.getItem("todos") ===null){

    todos = [];
}
else{
todos = JSON.parse(localStorage.getItem("todos"));

}
todos.push(todo);
localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos(){


//check
let todos;

if(localStorage.getItem("todos") ===null){

    todos = [];
}
else{
todos = JSON.parse(localStorage.getItem("todos"));

}

todos.forEach(function(todo){
    //div
const todoDiv =document.createElement('div');
todoDiv.classList.add ('todo');
//li
const newTodo=document.createElement('li');
newTodo.innerText= todo;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);


//button complete
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class= "fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

//button trash
const trashdButton = document.createElement('button');
trashdButton.innerHTML = '<i class= "fas fa-trash"></i>';
trashdButton.classList.add("trash-btn");
todoDiv.appendChild(trashdButton);

//append
todoList.appendChild(todoDiv);
    
});
}

function removeLocalTodos(todo){

//check
let todos;

if(localStorage.getItem("todos") ===null){

    todos = [];
}
else{
todos = JSON.parse(localStorage.getItem("todos"));

}
const todoIndex = todo.children[0].innerText;
todos.splice(todos.indexOf(todoIndex), 1);
localStorage.setItem("todos", JSON.stringify(todos));
}

