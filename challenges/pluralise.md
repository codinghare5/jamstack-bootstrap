---
title: The pluralise function.
description: This is a JavaScript funcion.
date: 2021-03-18
tags:
  - javascript
  - challenge
  - function
  - string
layout: layouts/challenge.njk
image: /img/words.jpg
---

<div class="container mt-4">
  <h2>8th Javascript Challenge</h2>
  <p>Open the console to view the results.</p>
  <p>
Write a function pluralise that takes in two arguments,
a number and a word, and returns the plural. For example:

pluralise(5, 'cat'): '5 cats'
pluralise(7, 'turtle'): '7 turtles'
Bonus: Make it handle a few collective nouns like “sheep” and “geese”.

Bonus reference: https://www.wordexample.com/list/words-same-plural

  </p>
  
  <b>Pseudocode</b>
  <p>
  <pre>
    DEFINE a list of a few collective nouns
    FUNCTION pluralise taking two arguments (number, ofThings)
      DEFINE an empty {message} for OUTPUT
      IF number is less than or equal to 1
        THEN OUTPUT an error
      ELSE
        IF word is empty
          THEN OUTPUT an error
        ELSE IF the last letter of the word is equal tp 's'
        OR word exists in a list of collectives
          THEN prepare an appropriate {message}
        ELSE
          THEN pluralise adding 's' at the end
        END IF
      END IF
      RETURN {message}
    END FUNCION

  </pre>
  </p>

  <h4>Code:</h4>
  <code>
  <pre>
  const arrayUncountable = [
    "hair",
    "sheep",
    "fish",
    "salmon",
    "deer",
    "swine",
    "offspring",
    "aircraft"
  ];

    function pluralise(number, ofThings) {
      var message = "";
      if (number <= 1 || isNaN(number)) {
        console.error("ERROR: Give it a number bigger than 1!");
      } else {
        if (ofThings === "" || ofThings === null) {
          console.error("ERROR: There is nothing to pluralise!");
          // BONUS:
          // used indexOf method to determine if 'ofThings' exists in arrayUncountable
          // used method toLowerCase, because our array is case sensitive
        } else if (
          ofThings.slice(-1) === "s" ||
          arrayUncountable.indexOf(ofThings.toLowerCase()) !== -1
        ) {
          message += number + " " + ofThings;
        } else {
          message += number + " " + ofThings + "s";
        }
      }
      return message;
    }

  </pre>
  </code>

  <h4>Test:</h4>
  <code>
  <pre>
  console.log(pluralise(8, "cat"));
  console.log(pluralise(2, "bat"));
  console.log(pluralise("a", "hey"));
  console.log(pluralise(1, "umpf"));
  console.log(pluralise(2, "Salmon"));
  console.log(pluralise(2, ""));
  </pre>
  </code>
  <!-- TODO: add used methods -->
</div>
<script src="/js/js-challenges/ch8-pluralise.js"></script>
