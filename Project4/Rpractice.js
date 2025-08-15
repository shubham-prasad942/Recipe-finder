let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".rst");
let restart = document.querySelector(".new-btn");

let winner = document.querySelector(".winner");

disabled = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}

let turnO = true;

newGame = () =>{
    for(box of boxes){
        box.innerText = "";
        box.disabled = false;
        winner.style.display = "none";
    }
}

let winGame = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

let draw = () =>{
    let filled = 0;
    for(box of boxes){
        if(box.innerText !== ""){
            filled++;
        }
    }

    if(filled = 9 && winner.innerText ===""){
        winner.innerText = "Game was draw";
        winner.style.display = "flex";
        winner.style.color = "blue";
        winner.style.fontFamily = "arial";
    }
}


boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
    console.log("you ckicked");
    if(turnO === true){
        box.innerText = "O";
        turnO = false;
    }else{
        box.innerText ="X";
        turnO = true;
    }
    box.disabled = true;
     gameStop();
     draw();
    })
});

const gameStop = () =>{
   for(let game of winGame){
       let pos1 = boxes[game[0]].innerText;
       let pos2 = boxes[game[1]].innerText;
       let pos3 = boxes[game[2]].innerText;
       
       if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
           console.log("winner", pos1);
           winner.innerText = `Congratulation, Winner is ${pos1}`;
           disabled();
           winner.style.display = "flex";
           winner.style.color = "red";
           winner.style.fontFamily = "arial";
           break;
       }
   }
};

restart.addEventListener("click", () =>{
    newGame();
})

reset.addEventListener(("click"), () =>{
    setRe();
})

let setRe = () =>{
    for(box of boxes){
        turnO = true;
        box.disabled = false;
        box.innerText = "";
        winner.style.display = "none";
    }
}

// try to draw condition 
