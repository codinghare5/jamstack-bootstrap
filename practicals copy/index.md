---
layout: layouts/home.njk
title: Tip calculator
templateClass: tmpl-home
eleventyNavigation:
  key: Tip calculator
  order: 1
  parent: Javascript
---

<div class="container mt-4">
  <h1>Lesson 9 - Programming Concepts</h1>
  <p>Open the console to view the results.</p>
</div>
<script>
  // Bill
  var pre_tip_total = 35.85;
  var one_percent = pre_tip_total / 100;
  var tip_percent = 15;
  var tip_amount = one_percent * tip_percent;
  // console.log(tip_amount);
  tip_amount = tip_amount.toFixed(2); // turns into a string
  bill_total = parseFloat(pre_tip_total) + parseFloat(tip_amount);
  bill_total = bill_total.toFixed(2);
  // console.log(bill_total);
  str_message = 'Your food bill was £' + pre_tip_total + ', you have tipped ' + tip_percent + 
                        '% which equals £' + tip_amount + ', bringing your total bill £' + bill_total + '.';
  console.log(str_message);
</script>