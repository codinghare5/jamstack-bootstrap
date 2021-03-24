// Task 2
let myFavouriteFoods = [
  "Pizza",
  "Veg Srtir Fry",
  "Veg Stew",
  "Mix Salad",
  "Red Lentils Spaghetti Bolognese",
];

function printSomeOut(array) {
  console.log(array[0]);
  console.log(array[2]);
  console.log(array[4]);
}

// printSomeOut(myFavouriteFoods);

// Task 3
// for (var i = 0; i < myFavouriteFoods.length; i++) {
//   console.log(myFavouriteFoods[i]);
// }

var myRecipe = {
  recipeTitle: "Veggie Pizza",
  servings: 2,
  ingredients: [
    "pizza base",
    "tomato sos",
    "mozzarela",
    "onion",
    "mushrooms",
    "pepper",
    "tomato",
  ],
  directions: [
    "Spread the sos over the pizza base.",
    "Add mozzarella cheese on top.",
    "Put the all the veggies in any pattern you please.",
    "E voi'la!",
  ],
  letsCook: function (title) {
    document.write("I'm hungry! Lets cook..." + title + "<br>");
  },
};

myRecipe.letsCook(myRecipe.recipeTitle);
document.write(`serves ${myRecipe.servings} <br>`);
document.write("<h3>Ingredients:</h3>");
document.write("<ul>");
for (var i = 0; i < myRecipe.ingredients.length; i++) {
  document.write(`<li>${myRecipe.ingredients[i]}</li>`);
}
document.write("</ul>");
document.write("<h3>Directions:</h3>");
for (var i = 0; i < myRecipe.directions.length; i++) {
  document.write(`${myRecipe.directions[i]} `);
}
