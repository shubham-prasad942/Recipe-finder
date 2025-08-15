const photos = [
  {
    name: "Tortoise",
    pic: "https://img.freepik.com/free-vector/cute-girl-cartoon-character_1308-142205.jpg", // cartoon turtle
    about: "One of the slowest creatures on Earth",
  },
  {
    name: "Hamster",
    pic: "https://img.freepik.com/free-vector/cute-girl-cartoon-character_1308-142207.jpg",
    about:
      "A tiny, fluffy rodent that loves to store food in its cheeks and run in wheel",
  },
  {
    name: "Dog",
    pic: "https://img.freepik.com/free-vector/cute-rabbit-cartoon-character_1308-143801.jpg",
    about:
      "A loyal and friendly companion known as man's best friend, full of energy and love",
  },
  {
    name: "Giraffe",
    pic: "https://img.freepik.com/free-vector/cute-lion-cartoon-character_1308-138909.jpg",
    about:
      "The tallest land animal, known for its long neck and gentle nature.",
  },
  {
    name: "Owl",
    pic: "https://img.freepik.com/free-vector/cute-lion-cartoon-character_1308-138902.jpg",
    about: "A wise nocturnal bird with sharp vision",
  },
];
const main = document.querySelector(".main");
let input = document.querySelector("input");
const res = document.querySelector(".message");
function cards(arr) {
  arr.forEach((val) => {
    let div = document.createElement("div");
    div.classList.add("card");

    let image = document.createElement("img");
    image.src = `${val.pic}`;
    div.appendChild(image);

    let name = document.createElement("h1");
    name.textContent = val.name;
    div.appendChild(name);

    let about = document.createElement("p");
    about.textContent = val.about;
    div.appendChild(about);

    main.appendChild(div);
  });
}
cards(photos);

input.addEventListener("input", (dets) => {
  let found;
  let value = input.value.toLowerCase();
  res.textContent = "";
  document.querySelectorAll(".card").forEach((val) => {
    let name = val.querySelector("h1").textContent.toLowerCase();
    if (name.includes(value)) {
      val.style.display = "block";
      found = true;
    } else {
      val.style.display = "none";
    }
  });

  if (!found) {
    let message = document.createElement("h1");
    message.innerText = "No animal found";
    message.style.margin = "2rem";
    res.appendChild(message);
  }
});
