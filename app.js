const form = document.querySelector("#task-form")
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
form.addEventListener("submit", addTask);

function addTask(e) {
    if (taskInput.value === "") {
        alert("Add new task")
    } else {
        const li = document.createElement("Li");
        li.className = "collection-item";
        li.appendChild(document.createTextNode(taskInput.value));
        const link = document.createElement("a");
        link.className = "secondary-content";
        link.innerHTML = '<i class="fas fa-backspace"></i>'
        li.appendChild(link);
        taskList.appendChild(li);
        taskInput.value = "";
        e.preventDefault();
    }
}