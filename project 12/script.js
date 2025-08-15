const weekDis = document.querySelector("#week");
const dateDis = document.querySelector("#date");
const task = document.querySelector("#task");
const add = document.querySelector("#plus");
const all = document.querySelector("#all");
const active = document.querySelector("#active");
const checkboxes = document.querySelector(".checkboxes");
const completed = document.querySelector("#completed");
const work = document.querySelector("#work");
const clear = document.querySelector("#clear");
const groupCheckbox = document.querySelector(".groupCheckbox");

const date = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
weekDis.textContent = days[date.getDay()] + ",";
const dateNow = String(date.getDate()).padStart(2, "0");
const month = String(date.getMonth() + 1).padStart(2, "0");
const year = date.getFullYear();
dateDis.textContent = `${dateNow}-${month}-${year}`;

function text() {
  const options = document.querySelectorAll(".options p");
  options.forEach((option) => {
    option.addEventListener("click", (e) => {
      options.forEach((opt) => {
        opt.style.textDecorationLine = "none";
      });
      option.style.textDecorationLine = "underline";
    });
  });
}
text();

function addTasks() {
  const checkboxes = document.createElement("div");
  checkboxes.classList.add("checkboxes");
  const task = document.querySelector("#task");
  const taskVal = task.value;
  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("checkbox");
  const label = document.createElement("label");
  label.id = "label";
  label.textContent = taskVal;
  const span = document.createElement("span");
  span.id = "work";
  label.appendChild(span);
  checkboxes.append(input, label);
  groupCheckbox.appendChild(checkboxes);
}

clear.addEventListener("click", () => {
  location.reload();
});

add.addEventListener("click", () => {
  addTasks();
});

active.addEventListener("click", () => {
  const input = document.querySelectorAll(".checkbox");
  const checkboxes = document.querySelectorAll(".checkboxes");
  input.forEach((checkbox, index) => {
    if (!checkbox.checked) {
      checkboxes[index].style.display = "flex";
    } else {
      checkboxes[index].style.display = "none";
    }
  });
});

all.addEventListener("click", () => {
  const input = document.querySelectorAll(".checkbox");
  const checkboxes = document.querySelectorAll(".checkboxes");
  input.forEach((checkbox, index) => {
    checkboxes[index].style.display = "flex";
  });
});

completed.addEventListener("click", () => {
  const input = document.querySelectorAll(".checkbox");
  const checkboxes = document.querySelectorAll(".checkboxes");
  input.forEach((checkbox, index) => {
    if (checkbox.checked) {
      checkboxes[index].style.display = "flex";
    } else {
      checkboxes[index].style.display = "none";
    }
  });
});
