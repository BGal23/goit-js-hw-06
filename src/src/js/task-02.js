const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul#ingredients")

ingredients.forEach(vegetable => {
  const lastItem = document.createElement("li");
  lastItem.textContent = vegetable;
  list.append(lastItem);
})


