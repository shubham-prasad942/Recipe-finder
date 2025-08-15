const input = document.getElementById("input");
const searchBtn = document.getElementById("search");
const errorDiv = document.querySelector("#error-div");
const dish = document.querySelector("#dish");
const result = document.querySelector("#result");
const recipees = document.querySelector("#recipees");
const mealsDetails = document.querySelector(".meal-box");

const baseURL = "https://www.themealdb.com/api/json/v1/1/";
const searchURL = `${baseURL}search.php?s=`;

searchBtn.addEventListener("click", () => {
  const query = input.value.trim();
  errorDiv.style.display = "none";
  recipees.innerHTML = "";
  result.style.display = "none";
  if (!query) {
    const display = setTimeout(() => {
      errorDiv.style.display = "block";
      errorDiv.textContent = "Please enter something."
      errorDiv.style.alignContent = "center";
      errorDiv.style.color = "#eb5e41";
      errorDiv.style.fontWeight = "800";
      errorDiv.style.textAlign = "center";
    }, 500);
    return;
  }
  fetch(searchURL + query)
    .then((response) => response.json())
    .then((data) => {
      if (!data.meals) {
        result.style.display = "none";
        const display = setTimeout(() => {
          errorDiv.style.display = "block";
        }, 500);
        return;
      }
      console.log(data);
      if (query) {
        dish.textContent = `"${query}"`;
        result.style.display = "block";
      }
      data.meals.forEach((meals) => {
        const recipeContainer = document.createElement("div");
        recipeContainer.classList.add("recipe-container");
        const imageCont = document.createElement("div");
        imageCont.classList.add("image");
        const img = document.createElement("img");
        img.src = meals.strMealThumb;
        imageCont.append(img);
        const text = document.createElement("div");
        text.classList.add("text");
        const para = document.createElement("p");
        para.textContent = meals.strMeal;
        const button = document.createElement("button");
        button.classList.add("name");
        button.textContent = meals.strCategory;
        text.append(para, button);
        recipeContainer.append(imageCont, text);
        recipees.appendChild(recipeContainer);

        button.addEventListener("click", () => {
          recipees.style.display = "none";
          mealsDetails.style.display = "block";
          const mealBox = document.createElement("div");
          mealBox.id = "meals-details";
          const btn = document.createElement("button");
          btn.id = "back";
          btn.style.fontSize = "0.7rem";
          const icon = document.createElement("i");
          icon.classList.add("fas", "fa-arrow-left");
          icon.textContent = "Back to recipe";
          btn.append(icon);
          btn.addEventListener("click", () => {
            mealsDetails.style.display = "none";
            recipees.style.display = "grid";
          });
          mealBox.appendChild(btn);
          const mealImage = document.createElement("div");
          mealImage.classList.add("meal-det-image");
          const mealImg = document.createElement("img");
          mealImg.src = meals.strMealThumb;
          mealImage.append(mealImg);
          mealBox.appendChild(mealImage);
          const heading = document.createElement("h1");
          heading.id = "naam";
          heading.textContent = meals.strMeal;
          const categ = document.createElement("button");
          categ.classList.add("name");
          categ.textContent = meals.strCategory;
          categ.style.display = "block";
          categ.style.margin = "1rem auto";
          mealBox.append(heading, categ);
          const mealCont = document.createElement("div");
          const aboutMeal = document.createElement("p");
          aboutMeal.textContent = meals.strInstructions;
          aboutMeal.style.fontSize = "0.9rem";
          aboutMeal.style.marginBottom = "0.7rem";
          mealCont.appendChild(aboutMeal);
          mealBox.appendChild(mealCont);
          const instructions = document.createElement("h1");
          instructions.id = "inst";
          instructions.textContent = "Ingredients:-";
          instructions.fontSize = "0.7rem";
          mealBox.append(instructions);
          const about = document.createElement("p");
          about.id = "about";
          mealBox.append(about);
          const list = document.createElement("div");
          list.classList.add("ingredients");
          const ingredients = document.createElement("h1");
          ingredients.id = "ing";
          ingredients.textContent = "Ingredients";
          list.append(ingredients);
          const ingDets = document.createElement("div");
          ingDets.classList.add("list");
          const unorder = document.createElement("ul");
          unorder.classList.add("unorderLi");
          for (let i = 1; i <= 20; i++) {
            const ingredient = meals[`strIngredient${i}`];
            const measure = meals[`strMeasure${i}`];
            if (ingredient && ingredient.trim() !== "") {
              const unorderLi = document.createElement("li");
              unorderLi.textContent = `${ingredient} - ${measure}`;
              unorder.append(unorderLi);
              ingDets.appendChild(unorder);
              mealBox.appendChild(ingDets);
            }
          }
          const watchVid = document.createElement("button");
          watchVid.classList.add("watch");
          const ytIcon = document.createElement("i");
          ytIcon.classList.add("fab", "fa-youtube");
          watchVid.textContent = "Watch Video";
          watchVid.append(ytIcon);
          ingredients.appendChild(watchVid);
          ingDets.append(watchVid);
          watchVid.addEventListener("click", () => {
            window.open(meals.strYoutube, "_blank");
          });
          mealsDetails.innerHTML = "";
          mealsDetails.append(mealBox);
          console.log(mealsDetails);
        });
      });
    })
    .catch((err) => {
      console.log("error is", err);
    });
});

