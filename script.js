const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  const task = inputBox.value.trim();
  if (task === "") {
    alert("You must write something!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  const span = document.createElement("span");
  span.innerHTML = "\u00d7"; // Unicode for "×"
  li.appendChild(span);

  listContainer.appendChild(li);
  inputBox.value = "";

  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  const saved = localStorage.getItem("data");
  if (saved) {
    listContainer.innerHTML = saved;
  }
}
showTask();
