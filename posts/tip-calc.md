---
title: The tip calculator.
description: Task from Lesson 9.
date: 2021-02-18
tags:
  - task
  - javascript
  - function
layout: layouts/post.njk
image: /img/tip-jar.jpg
---

<div class="container mt-4">

``` js
// JavaScript Tip Calculator
function tipCalculator(){
  let totalBill = 50;
  let tipPercent = 15;
  let tip = (totalBill / 100) * tipPercent;
  let totalBillWithTip = totalBill + tip;
  var myBill = document.getElementById("myBill");
  myBill.innerHTML = totalBillWithTip;
}

```
<h4>Tip Calculator</h4>
<p><b>If your bill is £50, what will you pay with 15% tip?</b></p>
<br>
<h4>The answer is:</h4>
<p id="myBill"></p>

</div>
<script>
  function tipCalculator(){
      let totalBill = 50;
      let tipPercent = 15;
      let tip = (totalBill / 100) * tipPercent;
      let totalBillWithTip = totalBill + tip;
      var myBill = document.getElementById("myBill");
      myBill.innerHTML = totalBillWithTip;
  }
  tipCalculator();
</script>
