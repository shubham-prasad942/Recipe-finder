const start = document.querySelector("#start");
const intro = document.querySelector("#introduction");
const questionsCont = document.querySelector("#questions-cont");
const question = document.querySelector("#questions");
const optionsBox = document.querySelector("#answers");
const scoreShow = document.querySelector("#score");
const resultCont = document.querySelector("#result-cont");
const endScore = document.querySelector("#endScore");
const restart = document.querySelector("#restart");
const number = document.querySelector("#number");
const line = document.querySelector("#line");

let currentQues = 0;
let score = 0;
let numberIdx = 1;
const questionsObj = [
  {
    Question: "Q1. What is the capital of India?",
    Answers: [
      { text: "Lucknow", isCorrect: false },
      { text: "Mumbai", isCorrect: false },
      { text: "Delhi", isCorrect: true },
      { text: "Pune", isCorrect: false },
    ],
  },
  {
    Question: "Q2. Which planet is known as the Red Planet?",
    Answers: [
      { text: "Mars", isCorrect: true },
      { text: "Earth", isCorrect: false },
      { text: "Saturn", isCorrect: false },
      { text: "Venus", isCorrect: false },
    ],
  },
  {
    Question: "Q3. Which language is used to style web pages?",
    Answers: [
      { text: "HTML", isCorrect: false },
      { text: "Python", isCorrect: false },
      { text: "Java", isCorrect: false },
      { text: "CSS", isCorrect: true },
    ],
  },
  {
    Question: "Q4 .Who is the Prime Minister of India (as of 2024)?",
    Answers: [
      { text: "Narendra Modi", isCorrect: true },
      { text: "Rahul Gandhi", isCorrect: false },
      { text: "Arvind Kejriwal", isCorrect: false },
      { text: "Yogi Adityanath", isCorrect: false },
    ],
  },
  {
    Question: "Q5 .What is the largest mammal?",
    Answers: [
      { text: "Elephant", isCorrect: false },
      { text: "Giraffe", isCorrect: false },
      { text: "Blue Whale", isCorrect: true },
      { text: "Hippopotamus", isCorrect: false },
    ],
  },
];

start.addEventListener("click", () => {
  intro.style.display = "none";
  questionsCont.style.display = "initial";
  showQuestion();
});

function showQuestion() {
  optionsBox.innerHTML = "";
  const current = questionsObj[currentQues];
  question.textContent = current.Question;
  current.Answers.forEach((answer) => {
    const option = document.createElement("button");
    option.classList.add("answers-btn");
    optionsBox.appendChild(option);
    option.textContent = answer.text;
    option.addEventListener("click", () => {
      if (answer.isCorrect) {
        option.style.border = "green";
      } else {
        option.style.border = "red";
      }
      setTimeout(() => {
        handleAnswer(answer.isCorrect);
      }, 500);
    });
  });
}

function handleAnswer(isCorrect) {
  if (isCorrect) {
    score++;
  }
  scoreShow.textContent = `${score}`;
  currentQues++;
  line.style.width = `${currentQues * 20}%`;
  numberIdx++;
  number.textContent = numberIdx;

  if (currentQues < questionsObj.length) {
    showQuestion();
  } else {
    resultShow();
  }
}

function resultShow() {
  questionsCont.style.display = "none";
  resultCont.style.display = "initial";
  endScore.textContent = score;
}

restart.addEventListener("click", () => {
  location.reload();
});
