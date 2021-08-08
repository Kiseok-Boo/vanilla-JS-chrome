const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoLists = document.getElementById("todo-lists");
let toDoArray = [];
const TODOS_KEY = "toDos";

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDoArray));
}

function deleteToDo(event) {
  const selectedList = event.target.parentElement;
  selectedList.remove();
  toDoArray = toDoArray.filter((item) => item.id !== parseInt(selectedList.id));
  saveToDo();
}

function paintToDo(toDo) {
  const toDoList = document.createElement("li");
  const toDoListSpan = document.createElement("span");
  const toDoListButton = document.createElement("button");
  toDoList.id = toDo.id;
  toDoListSpan.innerText = toDo.text;
  toDoListButton.innerText = "❌";
  toDoListButton.addEventListener("click", deleteToDo);
  toDoList.appendChild(toDoListSpan);
  toDoList.appendChild(toDoListButton);
  toDoLists.appendChild(toDoList);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDoObj = {
    id: Date.now(),
    text: toDoInput.value,
  };
  toDoInput.value = "";
  toDoArray.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDoArray = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
