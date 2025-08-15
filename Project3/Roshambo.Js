alert("Welcome to the Game");
let userScore = 0;
let compScore = 0;

let images = document.querySelectorAll(".image");

let msg = document.querySelector(".msg");
console.log(msg);

let scoreUserElement = document.querySelector("#user-score");
let compScoreElement = document.querySelector("#comp-score");



const userWinner = (userWin,userChoice,compChoice) =>{
    if(userWin === true){
        userScore++;
        scoreUserElement.innerText = userScore;
        console.log("You Win");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScoreElement.innerText = compScore;
         console.log("You Lose");
         msg.innerText = `You lost ${compChoice} beats ${userChoice}`;
         msg.style.backgroundColor = "red";
    }
}

const compChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const draw = () =>{
  console.log("game was draw.");
  msg.innerText = "Draw";
   msg.style.backgroundColor = "blue";
}

const playGame = (userChoice) =>{
     console.log("userChoice =", userChoice);
    //  computer choice|
    const comp = compChoice();
    console.log("computer Choice = ", comp);
    if(userChoice === comp){
        draw();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
          userWin = comp === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = comp === "scissors"? false : true;
        }else if(userChoice === "scissors"){
            userWin = comp === "rock"? false: true;
        }
        userWinner(userWin,userChoice,comp);
    }
}

images.forEach((elements) =>{
    elements.addEventListener("click", () =>{
    const userChoice = elements.getAttribute("id");
    console.log(elements, userChoice);
    playGame(userChoice);
    })
    
})