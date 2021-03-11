---
layout: layouts/home.njk
title: Functions & Control Flow
templateClass: tmpl-home
eleventyNavigation:
  key: Functions & Control Flow
  order: 6
  parent: Javascript
---

<div class="containet mt-4">
  <h1>Basic Javascript tasks</h1>
  <p>Open the console to see results.</p>
</div>
<script>
  //function from task 1
  function outputMessage() {
    console.log("This is a message!");
  }
  //function from task 1
  function fullNameGenerator(firstName, lastName){
    var fullName = firstName + ' ' + lastName
    console.log(fullName);
  }
  //function from task 1
  function fullNameGeneratorReturn(firstName, lastName){
    return firstName + ' ' + lastName;
  }
  //function from task 1
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
