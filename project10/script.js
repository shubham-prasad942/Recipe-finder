const form = document.querySelector("form");
const add = document.querySelector("#add");
const naam = document.querySelector("#name");
const url = document.querySelector("#url");
const remove = document.querySelector("#remove");
const buttons = document.querySelector(".buttons");
const list = document.querySelector(".list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validator()) return;
  addBtn();
  url.value = "";
  naam.value = "";
});

function validator() {
  const nameVal = naam.value;
  const urlVal = url.value;
  if (nameVal === "" || urlVal === "") {
    alert("Please fill the name and url");
    return false;
  }
  return true;
}

function addBtn() {
  const urlRegex =
    /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
  const nameVal = naam.value.trim();
  let urlVal = url.value.trim();
  const div = document.createElement("div");
  div.classList.add("buttons");
  const heading = document.createElement("h1");
  heading.style.textTransform = "capitalize";
  heading.textContent = nameVal;
  const remove = document.createElement("button");
  remove.textContent = "Remove";
  remove.classList.add("remove");
  div.append(heading, remove);
  if (urlRegex.test(urlVal)) {
    list.appendChild(div);
    heading.addEventListener("click", () => {
      window.open(urlVal,"_blank");
    });
    remove.addEventListener("click", (e) => {
      list.removeChild(div);
    });
  } else {
    alert("Please Fill Valid URL");
    return;
  }
}
