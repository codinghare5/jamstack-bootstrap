---
layout: layouts/home.njk
title: Pseudocode
templateClass: tmpl-home
eleventyNavigation:
  key: Pseudocode
  order: 7
  parent: Javascript
---

<div class="container mt-4">
  <h3>Fizz Buzz</h3>
  <code>
    <pre>
      LOOP through numbers 0 - 100
        IF the number is a multiple of 3 and 5
          THEN output "fizzbuzz"
        ELSE IF number is a multiple of 3
          THEN output "fizz"
        ELSE IF the number is a mulitple of 5
          THEN output "buzz"
        ELSE
          THEN output number
    </pre>
  </code>
</div>
<div class="container mt-4">
  <h3>Reading list</h3>
  <code>
    <pre>
      arrBooks = [
        {
          title:'The Lord of the Rings',
          author: 'J R R Tolkien',
          blnRead: false
        },
        {
          title:'Harry Potter',
          author: 'J K Rowling',
          blnRead: true
        },
      ]
      LOOP through each book
        IF current book has been read
          THEN output ‘You already read “{title}” by {author}’
        ELSE
          THEN output ‘You still need to read “{title}” by {author}’
      END LOOP
    </pre>
  </code>
  <h3>Recipe list</h3>
  <code>
    <pre>
      LOOP through all the recipes
        LOOP through ingredient list
          PRINT out the ingredient
        END LOOP
      END LOOP
    </pre>
  </code>
  <h3>Fix start</h3>
  <code>
    <pre>
      FUNCTION fixStart(string)
        STORE the first letter in a variable
        LOOP through remaining letters of the string
          IF the current letter is equal to the stored one
            THEN SWAP the letter with an *
          ELSE
            THEN CONTINUE
        END LOOP
    </pre>
  </code>
</div>
<script>
  // READING LIST
  // LOOP through numbers 0 - 100
  for(var number=1;number<=100;number++){
    var message = '';
    //   IF the number is a multiple of 3 and 5
    if(number % 15 == 0){
      //     THEN output "fizzbuzz"
      message = 'fizzbuzz';
    }
    //   ELSE IF number is a multiple of 3
    else if(number % 3 == 0){
      //     THEN output "fizz"
      message = 'fizz';
    }
    //   ELSE IF the number is a mulitple of 5
    else if(number % 5 == 0){
      //     THEN output "buzz"
      message = 'buzz';
    }
    //   ELSE
    //     THEN output number
    else message = number;
    console.log(message);
  }
  // FIXSTART
  function fixStart(str) {
    let newStr = str.split("");
    let newStrFirstChar = newStr.splice(0, 1);
    for (let i=0; i < str.length; i++) {
        if (newStr[i] == newStrFirstChar) {
            newStr[i] = "*";
        }
    }
    return newStrFirstChar + newStr.join("");
  }
  // RECIPE LIST
  // Recipe List
  // Create an object to hold information on your favourite recipes. 1.
  // It should have properties for:
  // recipeTitle (a string)
  // servings (a number)
  // ingredients (an array of strings)
  // directions (a string)
  // List all recipes 2.
  // Create a loop to list all the ingredients. 3.
  let recipes = [
    {
      recipeTitle = "Recipe 1",
      servings = 5,
      ingredients = ["milk", "flour", "sugar"],
      directions = "Do this. Then this. Then that."
    },
    {
      recipeTitle = "Hot honey",
      servings = 1,
      ingredients = ["2 spoons of honey", "chilli flakes"],
      directions = "Put honey into a cup. Add chilli flakes."
    },
    {
      recipeTitle = "Recipe 3",
      servings = 2,
      ingredients = ["100ml of milk", "4 tablespoons of flour", "1 teaspoon of sugar"],
      directions = "Do this. Then this. Then that."
    }
  ];
  // LOOP through all the recipes
  //   LOOP through ingredient list
  //     PRINT out the ingredient
  //   END LOOP
  // END LOOP
</script>
