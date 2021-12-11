---
title: Loops, Arrays and Objects.
description: This is JavaScript funcion.
date: 2021-03-18
tags:
  - javascript
  - challenge
  - function
layout: layouts/post.njk
image: /img/loops.jpg
---

<div class="container mt-4">
  <h2>Javascript Tasks</h2>
  <h5 class="tip">Tip: Open up the Console to view the computed results.</h5>
  <p>
    <h4>Task 1: Percentage calculator</h4>

``` js
function percentageCalculator(number, percentage){
    return number * percentage / 100;
}
console.log(percentageCalculator(150, 30));

```
  </p>

  <p>
    <h4>Task 2: Use switch statement</h4>

``` js
function drinkOrder(size, drink) {
  let strMessage = "You have orderd a " + size;
  switch (drink) {
    case "cola":
      strMessage += " Cola";
      break;
    case "lemon":
      strMessage += " Lemonade";
      break;
    case "orange":
      strMessage += " Orangade";
      break;
    default:
      strMessage = "You have ordered a drink we don't sell";
      break;
  }
  if (size != "large" && size != "medium" && size != "large") {
    strMessage = "You have ordered a size we don't sell";
  }
  return strMessage;
}

let order1 = drinkOrder("small", "cola");
let order2 = drinkOrder("medium", "lemon");
let order3 = drinkOrder("large", "orange");
let order4 = drinkOrder("alex", "cola");
let order5 = drinkOrder("large", "alex");

console.log(order1);
console.log(order2);
console.log(order3);
console.log(order4);
console.log(order5);
```
  </p>
    <p>
    <h4>Task 3: Build a calculator</h4>

``` js
function calculator(number1, number2, operator) {
  let strMessage = "";
  let blnValidation = true;
  if (isNaN(number1)) {
    blnValidation = false;
    strMessage += "first argument must be a number";
  }
  if (isNaN(number2)) {
    blnValidation = false;
    if (strMessage) {
      strMessage += ", ";
    }
    strMessage += "second argument must be a number";
  }
  switch (operator) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "%":
      break;
    default:
      blnValidation = false;
      if (strMessage) {
        strMessage += ", ";
      }
      strMessage +=
        'third argument must be a valid operator ( "+", "-", "*", "/", "%")';
      break;
  }
  if (blnValidation) {
    switch (operator) {
      case "+":
        sum = number1 + number2;
        break;
      case "-":
        sum = number1 - number2;
        break;
      case "*":
        sum = number1 * number2;
        break;
      case "/":
        sum = number1 / number2;
        break;
      case "%":
        sum = number1 % number2;
        break;
    }
    strMessage = number1 + " " + operator + " " + number2 + "=" + sum;
  }
  return strMessage;
}

console.log(calculator(100, 10, "+"));
console.log(calculator(100, 10, "-"));
console.log(calculator(100, 10, "*"));
console.log(calculator(100, 10, "/"));
console.log(calculator(100, 10, "%"));

```
  </p>

</div>

<script src="/js/practical-1/task-1.js"></script>
<script src="/js/practical-1/task-2.js"></script>
<script src="/js/practical-1/task-3.js"></script>
