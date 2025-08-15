const password = document.querySelector("#passs");
const copy = document.querySelector("#copy");
const length = document.querySelector("#length");
const up = document.querySelector("#up");
const low = document.querySelector("#low");
const num = document.querySelector("#num");
const symb = document.querySelector("#symb");
const generate = document.querySelector("#generate");
const line = document.querySelector(".line");
const lengthValue = document.querySelector("#lengthValue");

length.addEventListener("input", () => {
  lengthValue.textContent = length.value;
});

generate.addEventListener("click", (e) => {
  e.preventDefault();
  realPass = randomPass();
  password.textContent = realPass;
  updateLineWidth();
});

function randomPass() {
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=[]{}|;:',.<>/?";
  let charPool = "";
  if (up.checked) {
    charPool += upperCaseChars;
  }
  if (low.checked) {
    charPool += lowerCaseChars;
  }
  if (num.checked) {
    charPool += numberChars;
  }
  if (symb.checked) {
    charPool += symbolChars;
  }

  let password = "";
  let lengthOf = parseInt(length.value);
  for (let i = 0; i < lengthOf; i++) {
    password += charPool[Math.floor(Math.random() * charPool.length)];
  }
  return password;
}

up.addEventListener("change", updateLineWidth);
low.addEventListener("change", updateLineWidth);
num.addEventListener("change", updateLineWidth);
symb.addEventListener("change", updateLineWidth);

function updateLineWidth() {
  let lineWidth = 0;
  if(up.checked){
    lineWidth += 25;
  }
  if(low.checked){
    lineWidth += 25;
  }
  if(num.checked){
    lineWidth += 25;
  }
  if(symb.checked){
    lineWidth += 25;
  }

  line.style.width = lineWidth + "%";
}
