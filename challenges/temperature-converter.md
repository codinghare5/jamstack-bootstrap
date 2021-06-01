---
title: The Temperature Converter.
description: This is simple JavaScript temperature converter. 
date: 2021-02-26
tags:
  - javascript
  - challenge
  - method
layout: layouts/challenge.njk
image: /img/temperature.jpg
---

<div class="container mt-4">
  <h4>3rd Javascript Challenge</h4>
  <h5 class="tip">Tip: Open up the Console to view the computed results.</h5>

``` js
const temperatureInCelsius = Math.floor((Math.random() * 101));
const temperatureInFahrenheit = temperatureInCelsius*9/5 +32;
console.log("It is " + temperatureInFahrenheit + "°F today. That’s " + temperatureInCelsius + "°C.");
```
</div>
<script src="/js/js-challenges/ch3-temperature-converter.js"></script>
