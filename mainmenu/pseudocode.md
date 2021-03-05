---
layout: layouts/home.njk
title: Pseudocode
templateClass: tmpl-home
eleventyNavigation:
  key: Pseudocode
  order: 5
---

<div class="container mt-4">
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
    </pre>
  </code>
</div>
<script>
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
</script>
