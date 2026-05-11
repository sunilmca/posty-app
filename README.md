# Posty App - Simple Markdown Blog

A lightweight Node.js blog application that serves Markdown posts from a folder. Create, view, and manage blog posts with a clean, simple interface.

## Features

✨ **Markdown Posts** - Write posts in Markdown format
📝 **Create Posts** - Add new posts through a web form
🎨 **Clean Design** - Responsive, modern UI
⚡ **Fast** - No database required, posts stored as files
🔄 **Easy to Use** - Intuitive interface for writers

## Project Structure

```
posty-app/
├── server.js           # Express server and route handlers
├── package.json        # Project dependencies
├── posts/              # Folder containing Markdown posts
│   └── welcome-to-my-blog.md  # Sample post
├── views/              # EJS templates
│   ├── index.ejs      # Home page listing posts
│   ├── post.ejs       # Individual post view
│   ├── new-post.ejs   # New post form
│   └── 404.ejs        # 404 error page
└── public/            # Static files
    └── style.css      # Stylesheet
```

## Installation

1. Navigate to the project directory:
```bash
cd posty-app
```

2. Install dependencies:
```bash
npm install
```

## Running the App

Start the server:
```bash
npm start
```

The app will be available at `http://localhost:3000`

## Usage

### View Posts
- Visit the home page to see all published posts
- Click on any post to read the full content

### Create a New Post
1. Click "Write New Post" button
2. Enter a title and write your post in Markdown
3. Click "Publish Post"

### Post Format
Posts are automatically created as Markdown files in the `posts/` folder. The title becomes the filename (with spaces converted to hyphens).

#### Markdown Features
- Headers: `# H1`, `## H2`, `### H3`, etc.
- Bold: `**bold text**`
- Italic: `*italic text*`
- Links: `[link text](https://url.com)`
- Code: `` `inline code` ``
- Code blocks: Use triple backticks
- Lists: Use `- ` or `1. `
- Blockquotes: Use `> `

## Example

Create a new post with the following content:

```markdown
# My First Post

This is my **first** blog post using Markdown!

## Why Markdown?

- Simple syntax
- Easy to read
- Widely supported

Here's a code example:

\`\`\`javascript
console.log('Hello, Blog!');
\`\`\`
```

## Customization

### Change Port
Edit `server.js` and change the `PORT` variable:
```javascript
const PORT = process.env.PORT || 3000;
```

### Customize Styling
Edit `public/style.css` to change colors, fonts, and layout.

### Modify Templates
Edit the files in `views/` directory to change the HTML structure.

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **EJS** - Template engine
- **Markdown-it** - Markdown parser

## Dependencies

- `express` - Web server framework
- `markdown-it` - Markdown parser and renderer
- `multer` - Middleware for handling file uploads (ready for future enhancements)

## Future Enhancements

Possible improvements:
- Search functionality
- Post tags and categories
- Comments system
- Draft posts
- Post editing
- Image uploads
- Export to PDF

## License

MIT

---

Built with ❤️ as a simple blogging platform
