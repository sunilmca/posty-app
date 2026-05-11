# Contributing to Posty App

Thank you for your interest in contributing to the Posty App! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Getting Started](#getting-started)
- [Adding a Blog Post](#adding-a-blog-post)
- [Development Setup](#development-setup)
- [Code Style](#code-style)
- [Submitting Changes](#submitting-changes)
- [Pull Request Process](#pull-request-process)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### Setting Up Your Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/posty-app.git
   cd posty-app
   ```

3. **Add upstream remote** to sync with the main repository:
   ```bash
   git remote add upstream https://github.com/sunilmca/posty-app.git
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Start the development server**:
   ```bash
   npm start
   ```

6. **Visit** `http://localhost:3000` in your browser

## Adding a Blog Post

There are two ways to add blog posts:

### Method 1: Using the Web Form (Easy)

1. Start the application (`npm start`)
2. Navigate to `http://localhost:3000`
3. Click the **"Write New Post"** button
4. Enter your post title and content in Markdown
5. Click **"Publish Post"**

Your post will be saved to the `posts/` folder as a Markdown file.

### Method 2: Direct File Creation (For Sample Posts)

1. Create a new `.md` file in the `posts/` folder
2. Name it using the format: `your-post-title.md` (lowercase with hyphens)
3. Add your Markdown content:
   ```markdown
   # Your Post Title

   Your post content here using Markdown syntax.
   ```

4. Restart the server to see your post appear

## Markdown Syntax Guide

Here are the Markdown features supported:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text** or __Bold text__
*Italic text* or _Italic text_

[Link text](https://example.com)

`inline code`

\`\`\`javascript
// Code block
console.log('Hello, Blog!');
\`\`\`

- Bullet point
- Another point

1. Numbered item
2. Another item

> Blockquote text

---
Horizontal line above
```

## Development Setup

### Project Structure

```
posty-app/
├── server.js              # Express server and main logic
├── package.json           # Project dependencies
├── posts/                 # Markdown blog posts
├── views/                 # EJS templates
│   ├── index.ejs         # Home page
│   ├── post.ejs          # Individual post page
│   ├── new-post.ejs      # New post form
│   └── 404.ejs           # Error page
└── public/               # Static files
    └── style.css         # Stylesheet
```

### Modifying the Application

- **Server Logic**: Edit `server.js` to modify routes or functionality
- **Styling**: Edit `public/style.css` to change the appearance
- **Templates**: Edit files in `views/` to change HTML structure

## Code Style

- Use 2-space indentation
- Use semicolons in JavaScript
- Keep lines under 100 characters when possible
- Use meaningful variable and function names
- Add comments for complex logic

### JavaScript Style

```javascript
// Good
const getAllPosts = () => {
  // function body
};

// Avoid
function getAllPosts(){
// function body
}
```

## Submitting Changes

### Before You Start

1. **Sync with upstream**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Create a feature branch**:
   ```bash
   git checkout -b your-feature-name
   ```

3. **Make your changes** and test thoroughly

### Testing Your Changes

1. **Start the development server**:
   ```bash
   npm start
   ```

2. **Test in the browser** at `http://localhost:3000`

3. **Test your specific changes**:
   - If adding posts: Create a test post and verify it renders correctly
   - If modifying styles: Check on mobile and desktop
   - If changing routes: Test all affected pages

### Committing Your Changes

Write clear, descriptive commit messages:

```bash
git add .
git commit -m "Add feature: clear description of what you did"
```

Examples of good commit messages:
- `Add search functionality to blog posts`
- `Fix responsive design on mobile devices`
- `Update contributing guidelines`
- `Add sample blog post about Markdown`

Avoid:
- `Fixed stuff`
- `Update`
- `WIP`

## Pull Request Process

### Creating a Pull Request

1. **Push your branch** to your fork:
   ```bash
   git push origin your-feature-name
   ```

2. **Open a pull request** on GitHub by:
   - Going to the main repository
   - Clicking **"New Pull Request"**
   - Selecting your branch
   - Filling in the PR template

### PR Template

Please include the following in your PR description:

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Documentation update
- [ ] Style/formatting change

## How Has This Been Tested?
Describe the testing you've done.

## Checklist
- [ ] My code follows the code style
- [ ] I have tested my changes locally
- [ ] I have added/updated relevant documentation
- [ ] My commit messages are clear and descriptive
```

### Review Process

- A maintainer will review your PR
- You may be asked to make changes
- Once approved, your PR will be merged into main
- Your contribution will be credited!

## Reporting Issues

If you find a bug or have a feature request:

1. **Check existing issues** to avoid duplicates
2. **Create a new issue** with:
   - Clear title describing the problem
   - Detailed description of the issue
   - Steps to reproduce (for bugs)
   - Expected vs. actual behavior
   - Screenshots if applicable

## Questions?

- Check existing issues and discussions
- Feel free to ask in a new issue with the `question` label
- Email through GitHub if needed

## Code of Conduct

Please be respectful and inclusive in all interactions. We welcome contributors of all skill levels!

## License

By contributing to this project, you agree that your contributions will be licensed under the same MIT License as the project.

---

Thank you for contributing to Posty App! 🎉
