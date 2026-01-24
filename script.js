let tasks = [];

function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  tasks.push(taskText);
  input.value = "";

  showTasks();
}

function showTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.textContent = tasks[i];

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", function () {
      tasks.splice(i, 1);
      showTasks();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  }
}

document.getElementById("addBtn").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    document.getElementById("addBtn").click();
  }
});