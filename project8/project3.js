const btns = document.querySelectorAll(".btn");
const cont = document.querySelectorAll(".box");

let darggedItems = null;

btns.forEach((btn)=>{
  btn.addEventListener("dragstart",(e)=>{
    darggedItems = btn;
    setTimeout(()=>{
      btn.style.display = "none";
    },0)
  })

  btn.addEventListener("dragend",()=>{
    setTimeout(()=>{
       btn.style.display = "block";
    },0)
  })
})

cont.forEach((box)=>{
box.addEventListener("dragover",(e)=>{
  e.preventDefault();
})

box.addEventListener("dragenter",(e)=>{
  e.preventDefault();
  box.style.backgroundColor = "#c9c9c9ff";
})

box.addEventListener("dragleave",(e)=>{
  e.preventDefault();
  box.style.backgroundColor = "#e3e4e8";
})

box.addEventListener('drop',()=>{
  if(darggedItems){
    box.appendChild(darggedItems);
  }
})
})
