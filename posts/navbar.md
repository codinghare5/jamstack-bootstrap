---
title: Navbar.
description: This is a post about how my navbar dropdown works.
date: 2021-02-24
tags:
  - html
  - challenge
  - pseudocode
layout: layouts/post.njk
image: /img/nav.jpg
---

<div class="card">
<pre>
LOOP through menu items
    IF item has no children
        THEN put it as simple link
    ELSE
        IF item's {parentType} is {dummy}
            THEN put it without a link as dropdown
            AND add toggle arrow
        ELSE
            THEN put it with a link
            AND add toggle arrow
        ENDIF
        LOOP through current item's children
            PUT the child's link and title
        ENDLOOP
    ENDIF
ENDLOOP
</pre>
</div>
