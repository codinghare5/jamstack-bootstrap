---
title: Functions and control flow.
description: Tasks from Lesson 10.
date: 2021-02-23
tags:
  - javascript
  - task
  - function
layout: layouts/post.njk
image: /img/function.jpg
---
<div class="container mt-4">
  <h4>Basic Javascript tasks</h4>
  <h5 class="tip">Tip: Open up the Console to view the results.</h5>

``` js
//function from task 1
function outputMessage() {
  console.log("This is a message!");
}
//function from task 2
function fullNameGenerator(firstName, lastName){
  var fullName = firstName + ' ' + lastName
  console.log(fullName);
}
//function from task 3
function fullNameGeneratorReturn(firstName, lastName){
  return firstName + ' ' + lastName;
}
//function from task 4
function wearACoat(temperature){
  var strMessage = "You don't need to wear a coat!";
  if (temperature < 10){
    strMessage = "You need to wear a coat.";
  }
  return strMessage;
}
//function from task 5
function wearACoatExtra(temperature){
  var strMessage;
  if (temperature < 0) {
    strMessage = "Do not go outside.";
  } else if (temperature < 10) {
    strMessage = "You do need a coat and a hat.";
  } else if (temperature < 15){
    strMessage = "You do need a coat.";
  }
  if (!strMessage) {
    strMessage = "You don't need to wear a coat!"
  }
  return strMessage;
}
```
</div>
<script>
  //function from task 1
  function outputMessage() {
    console.log("This is a message!");
  }
  //function from task 2
  function fullNameGenerator(firstName, lastName){
    var fullName = firstName + ' ' + lastName
    console.log(fullName);
  }
  //function from task 3
  function fullNameGeneratorReturn(firstName, lastName){
    return firstName + ' ' + lastName;
  }
  //function from task 4
  function wearACoat(temperature){
    var strMessage = "You don't need to wear a coat!";
    if (temperature < 10){
      strMessage = "You need to wear a coat.";
    }
    return strMessage;
  }
  console.log("Task 1 below");
  console.log("-------------");
  //Calls the output message
  outputMessage();
  console.log("-------------");
  console.log("Task 1 above");
  console.log("Task 2 below");
  console.log("-------------");
  //Calls the output message
  var fName = 'Marcin';
  var lName = 'Mukosiej';
  fullNameGenerator(fName, lName);
  console.log("-------------");
  console.log("Task 2 above");
  console.log("Task 3 below");
  console.log("-------------");
  //Calls the output message
  var fName = 'Marcin';
  var lName = 'Mukosiej';
  var fullName = fullNameGeneratorReturn(fName, lName);
  console.log(fullName);
  console.log("-------------");
  console.log("Task 3 above");
  console.log("Task 4 below");
  console.log("-------------");
  var temp1 = wearACoat(15);
  var temp2 = wearACoat(9);
  var temp3 = wearACoat(10);
  console.log(temp1);
  console.log(temp2);
  console.log(temp3);
  console.log("-------------");
  console.log("Task 4 above");
    console.log("Task 5 below");
  /*----- Task5 -----*/
  function wearACoatExtra(temperature){
    var strMessage;
    if (temperature < 0) {
      strMessage = "Do not go outside.";
    } else if (temperature < 10) {
      strMessage = "You do need a coat and a hat.";
    } else if (temperature < 15){
      strMessage = "You do need a coat.";
    }
    if (!strMessage) {
      strMessage = "You don't need to wear a coat!"
    }
    return strMessage;
  }
  console.log("Task 5 & 6 below");
  console.log(wearACoatExtra(-4));
  console.log(wearACoatExtra(9));
  console.log(wearACoatExtra(14));
  console.log(wearACoatExtra(18));
</script>
