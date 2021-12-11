---
title: Content management.
description: Added CMS to my 11ty website.
date: 2021-03-03
tags:
  - git
  - challenge
  - tutorial
layout: layouts/post.njk
image: /img/manager.jpg
---

<div class="card mt-1 mb-3 pt-3 pb-3">
    <a href="/admin/">Log in to CMS here</a>
</div>
<div class="card">
    <b>Add further data and page types to CMS (config.yaml)</b>
    <pre>
collections
  - name: "challenge" # Used in routes, e.g., /admin/collections/challenges
    label: "Challenges" # Used in the UI
    folder: "challenges" # The path to the folder where the documents are stored
    create: true # Allow users to create new documents in this collection
    slug: "{{slug}}" # Filename template, e.g., YYYY-MM-DD-title.md
    fields: # The fields for each document, usually in front matter
    - { label: "Layout", name: "layout", widget: "hidden", default: "blog" }
    - { label: "Title", name: "title", widget: "string" }
    - { label: "Description", name: "description", widget: "string" }
    - { label: "Publish Date", name: "date", widget: "datetime" }
    - { label: "Image", name: "thumbnail", widget: "image" }
    - { label: "Body", name: "body", widget: "markdown" }
    </pre>
</div>
