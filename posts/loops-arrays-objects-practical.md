---
title: Loops, Arrays and Objects - Practicals.
description: This is JavaScript funcion.
date: 2021-03-23
tags:
  - javascript
  - loop
  - array
  - object
  - practical
layout: layouts/post.njk
image: /img/objects.jpg
---

<div class="container mt-4">
  <h4>Task 1: Loop through muliplications</h4>

``` js
for (var i = 1; i <= 12; i++) {
  console.log(`${i} x 7 = ${i * 7}`);
}

for (var i = 1; i <= 12; i++) {
  for (var j = 1; j <= 12; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
```
  <h5 class="tip">Tip: Open up the Console to view the computed results.</h5>
  <br>
  <h4>Javascript Shopping Cart</h4>
  <p>
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
      Data
    </a>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
      Code
    </button>
  </p>
  <div class="collapse" id="collapseExample">
    <div class="card card-body">

``` js
let shoppingCart = [
  {
    name: "loaf of bread",
    type: "food",
    quantity: 1,
    price: 0.85,
  },
  {
    name: "multipack beans",
    type: "food",
    quantity: 2,
    price: 1,
  },
  {
    name: "mushrooms",
    type: "food",
    quantity: 10,
    price: 0.1,
  },
  {
    name: "can of beer",
    type: "alcohol",
    quantity: 4,
    price: 1.1,
  },
  {
    name: "prosecco",
    type: "alcohol",
    quantity: 1,
    price: 8.99,
  },
  {
    name: "steak",
    type: "food",
    quantity: 2,
    price: 3.99,
  },
  {
    name: "blue cheese",
    type: "food",
    quantity: 1,
    price: 2.99,
  },
  {
    name: "candles",
    type: "home",
    quantity: 3,
    price: 1.99,
  },
  {
    name: "cheesecake",
    type: "food",
    quantity: 1,
    price: 4.99,
  },
  {
    name: "onions",
    type: "food",
    quantity: 3,
    price: 0.4,
  },
];
```
  </div>
  </div>
    <div class="collapse" id="collapseExample2">
    <div class="card card-body">

``` js
// basic function 
function shoppingTotal(cart, discountAmount, type) {
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].type === type) {
      totalPrice +=
        (cart[i].price * cart[i].quantity * (100 - discountAmount)) / 100;
    } else totalPrice += cart[i].price * cart[i].quantity;
  }
  return totalPrice.toFixed(2);
}

// shopping total of items between some low and high price
function shoppingTotalBetween(cart, lowPrice, highPrice, quantity) {
  let arrItems = [];
  for (let i = 0; i < cart.length; i++) {
    let itemPrice = cart[i].price * cart[i].quantity;
    if (quantity === true) {
      if (itemPrice >= lowPrice && itemPrice <= highPrice) {
        arrItems.push(cart[i]);
      }
    } else {
      if (cart[i].price >= lowPrice && cart[i].price <= highPrice) {
        arrItems.push(cart[i]);
      }
    }
  }
  return arrItems;
}
```
  </div>
  </div>
  <h4>Coocking instructions function</h4>
  <br>
  <p>
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#task2" role="button" aria-expanded="false" aria-controls="task2">
      Task 2 and data
    </a>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#task2" aria-expanded="false" aria-controls="task2">
      Task: print recipe
    </button>
  </p>
  <div class="collapse" id="task2">
    <div class="card card-body">

``` js
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

printSomeOut(myFavouriteFoods);

// Task 3
for (var i = 0; i < myFavouriteFoods.length; i++) {
  console.log(myFavouriteFoods[i]);
}
```
  </div>
  </div>
    <div class="collapse" id="task3">
    <div class="card card-body">

``` js
// Task ?
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

```
  </div>
  </div>
</div>

<script src="/js/js-challenges/task1.js"></script>
<script src="/js/js-challenges/task2.js"></script>
<script src="/js/js-challenges/task3.js"></script>
