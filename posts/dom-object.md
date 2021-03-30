---
title: The DOM Object.
description: The introduction to the DOM. All the tasks from today's sessio.
date: 2021-03-25
tags:
  - javascript
  - task
  - DOM
layout: layouts/post.njk
image: /img/table.png
---

<div id="task1wrapper">
  <h1>This is the first task</h1>
  <img src="/img/noise.png"/>
</div>
<hr/>

<div id="task2wrapper">
  <h1>This is the second task</h1>
  <button onClick="task2()">Click to add content</button>
</div>
<hr/>

<div id="task3wrapper">
  <h1>This is task3</h1>
  <div id="task3-square" style="width: 200px; height: 200px; border: 1px solid red"></div>
</div>
<hr/>

<div id="task4wrapper">
  <h1>This is task4</h1>
  <a id="task4-link" href="https://LeedsWebDev.org">Leeds Web Dev</a>
</div>
<hr/>

<div id="task5wrapper">
  <h1>This is task5</h1>
  <form action="/la-di-da">
    <fieldset>
      <div>
        <label for="task5-input">Enter a number</label>
        <input id="task5-input" name="number" placeholder="Put a number here"/>
        <button id="task5-btn" type="submit">Multiply by 5</button>
      </div>
      <p id="task5-output">The number multiplied by 5 will go here</p>
    </fieldset>
  </form>
<hr/>

<script>
  function task1(){
    var task1Image = document.getElementsByTagName('img')[0];
    task1Image.src = "http://placekitten.com/200/200";
  }
  task1();

  function task2(){
    var task2div = document.getElementById("task2wrapper");
    var pTag = document.createElement('p');
    var pText = document.createTextNode("The text inside p tag");
    pTag.appendChild(pText);
    task2div.appendChild(pTag);
  }

  function task3(){
    var theSquare = document.getElementById('task3-square');
    var myFunction = function(){
      console.log('Squeeeq');
      alert('Hey, look at my red square!');
    }
    theSquare.addEventListener('mouseover', myFunction);
  }
  task3();

  function task4(){
    var theLink = document.getElementById('task4-link');
    var myInterceptFuncton = function(event){
      event.preventDefault();
      alert('Why leaving my page? :(');
    }

    theLink.addEventListener('click', myInterceptFuncton);
  }
  task4();

  function task5(){
    var theInput = document.getElementById('task5-input');
    var theButton = document.getElementById('task5-btn');
    var theOutput = document.getElementById('task5-output');
    var mySubmitFunction = function(dave) {
      dave.preventDefault();
      theOutput.innerHTML = theInput.value + ' * 5 = ' + (theInput.value * 5);
    }
    theButton.addEventListener('click', mySubmitFunction);
  }
  
  task5();
</script>
