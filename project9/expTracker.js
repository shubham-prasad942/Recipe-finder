const amount = document.querySelector("#amount");
const income = document.querySelector("#incomeVal");
const expenses = document.querySelector("#expensesVal");
const Product = document.querySelector("#Product");
const rupppees = document.querySelector("#rupppees");
const add = document.querySelector("#add");
const productAbt = document.querySelector("#product-abt");
const amountAbt = document.querySelector("#amount-abt");
const listsss = document.querySelector(".listsss");
const reset = document.querySelector("#restart");
let balance = 50000;
let expensesVal = 0;
let incomeVal = 0;
const rupeeSign = "₹";

add.addEventListener("click", (e) => {
  if (!validator()) return;
  inputVal();
  addBtn();
  updateBalance();

  productAbt.value = "";
  amountAbt.value = "";

  reset.addEventListener("click", () => {
    location.reload();
  });
});

function inputVal() {
  const amountVal = amountAbt.value;
  if (amountVal.includes("-")) {
    expensesVal += Math.abs(parseInt(amountVal));
    localStorage.setItem("expenses", expensesVal);
    expenses.textContent = expensesVal;
  } else {
    incomeVal += parseInt(amountVal);
    localStorage.setItem("income", incomeVal);
    income.textContent = incomeVal;
  }
  return amountVal;
}

function addBtn() {
  const productVal = productAbt.value;
  const amountVal = amountAbt.value;
  let object = {};
  object.product = productVal;
  object.amount = amountVal;
  const btn = document.createElement("button");
  btn.classList.add("trans-item");
  const product = document.createElement("span");
  product.id = "product";
  product.textContent = object.product;
  const rupppees = document.createElement("span");
  rupppees.id = "rupppees";
  rupppees.textContent = object.amount;
  btn.appendChild(product);
  btn.appendChild(rupppees);
  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-xmark");
  btn.appendChild(icon);
  if (productVal !== "" && amountVal !== "") {
    listsss.appendChild(btn);
  }
  icon.addEventListener("click", () => {
    btn.style.display = "none";
  });
}

function updateBalance() {
  let amountVal = parseInt(amountAbt.value);
  balance += amountVal;
  amount.textContent = balance;
}

function validator() {
  const productVal = productAbt.value;
  const amountVal = amountAbt.value;
  if (productVal === "" || amountVal === "") {
    alert("Please fill in both the product name and amount.");
    return false;
  }
  return true;
}
