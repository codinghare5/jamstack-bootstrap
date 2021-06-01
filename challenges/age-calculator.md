---
title: The Age Calculator.
description: This is simple JavaScript age calculator.
date: 2021-02-24
tags:
  - javascript
  - challenge
layout: layouts/challenge.njk
image: /img/age.jpg
---

<div class="container mt-5 mb-4">
  <section>
    <h4>1st Javascript Challenge</h4>
    <br>
    <h5 class="tip">Tip: Open up the Console to view the computed results.</h5>
    <br>

``` js
const currentYear = 2021;
const birthYear = 1986;
const possibleAge = currentYear - birthYear;
console.log("You are either " + possibleAge + " or " + (possibleAge - 1));
```
  </section>
</div>
<script src="/js/js-challenges/ch1-age-calculator.js"></script>
