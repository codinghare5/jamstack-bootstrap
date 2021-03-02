---
layout: layouts/home.njk
title: Pseudocode
templateClass: tmpl-home
eleventyNavigation:
  key: Pseudocode
  order: 7
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
  for(var counter=0;counter<=100;counter++){
    var message = '';
    //   IF the number is a multiple of 3 and 5
    if(counter % 15 == 0){
      //     THEN output "fizzbuzz"
      message = 'fizzbuzz';
    }
    //   ELSE IF number is a multiple of 3
    else if(counter % 3 == 0){
      //     THEN output "fizz"
      message = 'fizz';
    }
    //   ELSE IF the number is a mulitple of 5
    else if(counter % 5 == 0){
      //     THEN output "buzz"
      message = 'buzz';
    }
    //   ELSE
    //     THEN output number
    else message = counter;
    console.log(message);
  }
</script>
