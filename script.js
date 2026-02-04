let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (!text) return;

  tasks.push(text);
  input.value = "";
  showTasks();
}

function showTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, i) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task;

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "✓";
    doneBtn.style.marginLeft = "10px";
    doneBtn.onclick = () => span.classList.toggle("completed");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.style.marginLeft = "5px";
    deleteBtn.onclick = () => {
      tasks.splice(i, 1);
      showTasks();
    };

    li.appendChild(span);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

document
  .getElementById("addBtn")
  .addEventListener("click", addTask);