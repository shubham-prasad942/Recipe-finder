const add = document.querySelector("#add");
const formDiv = document.querySelector(".form");
const noteContainer = document.querySelector(".note-container");
const close = document.querySelector("#close");
const form = document.querySelector("form");

const imageUrl = document.querySelector("#image\\ url");
const fullName = document.querySelector("#full\\ name");
const homeTown = document.querySelector("#hometown");
const purpose = document.querySelector("#purpose");
const categoryRadios = document.querySelectorAll("input[name='category']");
const noteBox = document.querySelector(".noteBox");

add.addEventListener("click", () => {
  formDiv.style.display = "block";
  noteContainer.style.display = "none";
});

close.addEventListener("click", () => {
  formDiv.style.display = "none";
  noteContainer.style.display = "flex";
});

function saveToLocalStorage(obj) {
  const tasks = [obj];
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showCard();
}

form.addEventListener("submit", (dets) => {
  dets.preventDefault();
  const imageUrlInput = imageUrl.value.trim();
  const fullNameInput = fullName.value.trim();
  const homeTownInput = homeTown.value.trim();
  const purposeInput = purpose.value.trim();
  let selected = false;

  categoryRadios.forEach((category) => {
    if (category.checked) {
      selected = category.value;
    }
  });

  if (imageUrlInput === "") {
    alert("Please Enter Correct URL");
    return;
  }
  if (fullNameInput === "") {
    alert("Please Enter Correct Name");
    return;
  }
  if (homeTownInput === "") {
    alert("Please Enter Correct Home Town");
    return;
  }
  if (purposeInput === "") {
    alert("Please Enter Correct Purpose");
    return;
  }
  if (!selected) {
    alert("Please Select The category");
    return;
  }

  saveToLocalStorage({
    imageUrlInput,
    fullNameInput,
    homeTownInput,
    purposeInput,
    selected,
  });

  form.reset();
  formDiv.style.display = "none";
  noteContainer.style.display = "flex";
});

function showCard() {
  noteBox.innerHTML = "";
  const allTasks = JSON.parse(localStorage.getItem("tasks"));
  allTasks.forEach((tasks) => {
    const noteBoxContainer = document.createElement("div");

    const image = document.createElement("div");
    image.classList.add("image");
    const img = document.createElement("img");
    img.src = tasks.imageUrlInput;
    image.appendChild(img);
    noteBoxContainer.appendChild(image);

    const name = document.createElement("h1");
    name.textContent = tasks.fullNameInput;
    noteBoxContainer.appendChild(name);

    const personal = document.createElement("div");
    personal.classList.add("personal");

    const first = document.createElement("div");
    first.classList.add("first");

    const firstPara = document.createElement("p");
    firstPara.textContent = "Home town";
    const secondPara = document.createElement("p");
    secondPara.textContent = tasks.homeTownInput;
    first.appendChild(firstPara);
    first.appendChild(secondPara);
    personal.appendChild(first);

    const second = document.createElement("div");
    second.classList.add("second");
    const secondParagraph = document.createElement("p");
    secondParagraph.textContent = "Booking";

    const secondParagraph2 = document.createElement("p");
    secondParagraph2.textContent = tasks.purposeInput;
    second.appendChild(secondParagraph);
    second.appendChild(secondParagraph2);
    personal.appendChild(second);
    noteBoxContainer.appendChild(personal);

    const divButton = document.createElement("div");
    divButton.classList.add("divBtn");
    const firstBtn = document.createElement("button");
    firstBtn.innerHTML = "Call";
    const secondBtn = document.createElement("button");
    secondBtn.innerHTML = "Message";
    divButton.append(firstBtn, secondBtn);
    noteBoxContainer.appendChild(divButton);

    noteBox.appendChild(noteBoxContainer);
  });
}
