const boxes = document.querySelectorAll(".boxCont");
const body = document.querySelector("body");
const btn = document.querySelector("#genertateBtn");

function randomColor() {
  let hex = "#";
  let color = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    hex += color[Math.floor(Math.random() * 16)];
  }
  return hex;
}

function apply() {
  boxes.forEach((box) => {
    let newColor = randomColor();
    const hexVal = box.querySelector(".hexVal");
    let div = box.querySelector(".box");
    let i = box.querySelector("i");
    div.style.backgroundColor = newColor;
    hexVal.textContent = newColor;

    i.addEventListener("click", () => {
      body.style.backgroundColor = newColor;
    });

    div.addEventListener("click", () => {
      body.style.backgroundColor = newColor;
    });
  });
}

btn.addEventListener("click", apply);
