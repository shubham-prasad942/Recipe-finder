const quizData = [
  {
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
];

let index = 0;
let que = document.querySelector("#que");
let labels = document.querySelectorAll("label");
console.log(labels)

function loadQue (){
  let data = quizData[index];
  que.innerText = `${index + 1}) ${data.question}`;
  labels[0].innerText = `${data.a}`;
  labels[1].innerText = `${data.b}`;
  labels[2].innerText = `${data.c}`;
  labels[3].innerText = `${data.d}`;
}

let inputs = document.querySelectorAll("input");
function userChoice (){
  let selected = null;
  for(let i=0;i<inputs.length;i++){
    if(inputs[i].checked){
      selected = inputs[i].value;
    }
  }
  return selected;
}

let score = 0;
let submit = document.querySelector("#Submit");
let scorebox = document.querySelector(".boxCont")

submit.addEventListener("click",()=>{
    let user = userChoice();
  if(user === quizData[index].correct){
    score++;
  }
  index++;
  if(index < quizData.length){
    loadQue();
  }else{
    scorebox.innerHTML = `you have scored ${score} out of ${quizData.length}
    <button onclick = "location.reload()">Play again </button>`
  }
})
loadQue();