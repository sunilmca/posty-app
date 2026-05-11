# Welcome to My Blog

Welcome to my simple Node.js blog powered by Markdown! This is the first post to get you started.

## What is This?

This is a lightweight blog application built with Node.js and Express. It lets you:

- **Create posts** using Markdown syntax
- **View all posts** on the home page
- **Read individual posts** with rendered HTML
- **Add new posts** through a simple web form

## Features

### Simple and Fast
No databases needed! Posts are stored as Markdown files in the `posts` folder.

### Markdown Support
Write your posts using familiar Markdown syntax:

- **Bold text**: `**bold**`
- *Italic text*: `*italic*`
- [Links](https://example.com)
- `Inline code`

### Clean Design
A minimal, responsive design that looks great on desktop and mobile devices.

## Getting Started

To create a new post:

1. Click the "Write New Post" button on the home page
2. Enter a title and write your content in Markdown
3. Click "Publish Post"

Your post will be saved and immediately visible on the blog!

## Code Example

Here's a simple JavaScript example:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Blog!');
});

app.listen(3000);
```

## What's Next?

You can:
- Add more posts using the form
- Customize the CSS in `public/style.css`
- Modify the server settings in `server.js`
- Add comments, tags, or search functionality

Happy blogging! ✨
