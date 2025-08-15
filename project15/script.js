const testimonials = [
  {
    name: "Alice Johnson",
    photourl: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Amazing service, highly recommend!"
  },
  {
    name: "Bob Smith",
    photourl: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Very satisfied with the product quality."
  },
  {
    name: "Charlie Davis",
    photourl: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "Customer support was very helpful."
  }
];

const nameOf = document.querySelector("h1");
const paraOf = document.querySelector("p");
const imgOf = document.querySelector("img");
let index = 0;
changes();

function changes(){
    const {name,photourl,text} = testimonials[index];
    nameOf.textContent = name;
    paraOf.textContent = text;
    imgOf.src = photourl;
    index++;
    if(index === testimonials.length ){
        index = 0;
    }
    setTimeout(() => {
        changes();
    }, 2000);
}
