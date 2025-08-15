const hero = document.querySelector(".hero");

function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

function createHeart(ev) {
  const size = Math.random()*100;
  const XPos = ev.offsetX;
  const YPos = ev.offsetY;
  const createDiv = document.createElement("div");
  createDiv.classList.add("heartDiv");
  createDiv.style.left = XPos + "px";
  createDiv.style.top = YPos + "px";
  createDiv.style.width = size + "px";
  createDiv.style.height = size + "px";
  hero.append(createDiv);
  setTimeout(() => {
    createDiv.remove();
  }, 1000);
}

// 👇 Throttled version
hero.addEventListener("mousemove", throttle(createHeart, 100));

