const input = document.getElementById("input");
const addTask = document.getElementById("add-btn");
const list = document.querySelector(".task-list");

function AddingTask() {
  const task = input.value.trim();
  if (task === "") {
    return;
  }
  const li = document.createElement("li");
  const check = document.createElement("input");
  check.type = "checkbox";
  const span = document.createElement("span");
  span.textContent = task;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";
  li.appendChild(check);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);
  input.value = "";
  check.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
}

addTask.addEventListener("click", AddingTask);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    AddingTask();
  }
});
