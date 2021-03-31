---
title: The fixStart function.
description: This is JavaScript funcion.
date: 2021-03-18
tags:
  - javascript
  - challenge
  - function
layout: layouts/challenge.njk
image: /img/fix-start.jpg
---

<div class="container mt-4">
  <h2>6th Javascript Challenge</h2>
  <p>Open the console to view the results.</p>
  <code>
  <pre>
// FUNCTION fixStart(word)
function fixStart(word) {
  // SPLIT the word into array of letters and store it inside new variable
  let newWord = word.split("");
  // STORE the first letter in a variable
  const firstLetter = newWord.splice(0, 1);
  // LOOP through remaining letters of the string
  for (let i = 0; i < word.length; i++) {
    // IF the current letter is equal to the stored one
    if (newWord[i] == firstLetter) {
      // THEN SWAP the letter with an *
      newWord[i] = "*";
      // ELSE
    } else {
      // THEN continue
      continue;
    }
    // END LOOP
  }
  return firstLetter + newWord.join("");
}
  </pre>
  </code>
</div>
<script src="/js/js-challenges/ch6-fixstart.js"></script>
