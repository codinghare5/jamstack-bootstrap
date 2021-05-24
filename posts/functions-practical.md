---
title: Functions and control flow - practical.
description: Tasks from Lesson 11.
date: 2021-02-25
tags:
  - javascript
  - task
  - function
  - switch
layout: layouts/post.njk
image: /img/coat.jpg
---

<div class="container mt-4">
  <h1>Javascript Tasks</h1>
  <p>Open the console to view the results.</p>
<!-- Task1 -->
  <b>Task 1</b>
  <p>
    <a class="btn btn-light dropdown-toggle" data-bs-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapseExample">
      Percentage Calculator.
    </a>
  </p>
  <div class="collapse" id="collapse1">

``` js
function percentageCalculator(number, percentage){
  return number * percentage / 100;
}
console.log(percentageCalculator(150, 30));
```
  </div>
<!-- Task2 -->
  <b>Task 2</b>
  <p>
    <a class="btn btn-light dropdown-toggle" data-bs-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapseExample">
      Switch Statements.
    </a>
  </p>
  <div class="collapse" id="collapse2">

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
  </div>
<!-- Task3 -->
  <b>Task 3</b>
  <p>
    <a class="btn btn-light dropdown-toggle" data-bs-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapseExample">
      Build a calculation function.
    </a>
  </p>
  <div class="collapse" id="collapse3">

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
  </div>
</div>
<script src="/js/practical-1/task-1.js"></script>
<script src="/js/practical-1/task-2.js"></script>
<script src="/js/practical-1/task-3.js"></script>
