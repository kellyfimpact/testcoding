const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");


function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();

}

let toDos = [];


function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}


function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveTodos();
}


toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem("todos");

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    console.log(parsedToDos);
    parsedToDos.forEach((item) => console.log("this is ", item));
}

