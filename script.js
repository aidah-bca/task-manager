let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";

  showTasks();
}

function showTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.textContent = tasks[i];

    let doneBtn = document.createElement("button");
    doneBtn.textContent = "✓";
    doneBtn.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", function () {
      tasks.splice(i, 1);
localStorage.setItem("tasks", JSON.stringify(tasks));
showTasks();
    });

    li.appendChild(doneBtn);
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
showTasks();