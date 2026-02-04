function showTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");

    // text span (IMPORTANT)
    let span = document.createElement("span");
    span.textContent = tasks[i];

    let doneBtn = document.createElement("button");
    doneBtn.textContent = "✓";
    doneBtn.style.marginLeft = "10px";
    doneBtn.onclick = () => {
      span.classList.toggle("completed");
    };

    let deleteBtn = document.createElement("button");
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
  }
}


   

document.getElementById("addBtn").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    document.getElementById("addBtn").click();
  }
});
showTasks();