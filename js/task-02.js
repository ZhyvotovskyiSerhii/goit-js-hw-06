<<<<<<< Updated upstream
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = ingredients.map(ingredient => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  return listItem;
})
const ingredientsUl = document.querySelector("#ingredients");
ingredientsUl.append(...ingredientsList);
=======
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = ingredients.map(ingredient => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  return listItem;
})
const ingredientsUl = document.querySelector("#ingredients");
ingredientsUl.append(...ingredientsList);
>>>>>>> Stashed changes
console.log(ingredientsUl);