# Posty App - Study Notes & Project Documentation

## Project Overview

**Project Name**: Posty App  
**Type**: Node.js Blog Application  
**Purpose**: A simple, file-based blog system that serves Markdown posts  
**GitHub Repository**: https://github.com/sunilmca/posty-app  
**Date Created**: May 11, 2026

This is a study project demonstrating:
- Node.js and Express.js development
- File-based data storage (Markdown files)
- Template rendering with EJS
- Git workflow and GitHub collaboration
- Open source contribution practices
- Issue and Pull Request management

---

## Table of Contents

1. [Initial Project Creation](#initial-project-creation)
2. [Project Structure](#project-structure)
3. [Key Technologies](#key-technologies)
4. [MCP & Prompt History](#mcp--prompt-history)
5. [Step-by-Step Development](#step-by-step-development)
6. [File Breakdown](#file-breakdown)
7. [GitHub Workflow](#github-workflow)
8. [Blog Posts Created](#blog-posts-created)
9. [Important Commands](#important-commands)
10. [Lessons Learned](#lessons-learned)

---

## Initial Project Creation

### Step 1: Project Setup

**Location**: `c:\Projects\POC\POSTY-APP`

Created the basic project structure with:
- `package.json` - Project configuration and dependencies
- `server.js` - Main application file
- `public/` - Static files (CSS)
- `views/` - EJS template files
- `posts/` - Markdown blog posts

### Step 2: Dependencies Installation

Created `package.json` with the following dependencies:

```json
{
  "name": "posty-app",
  "version": "1.0.0",
  "description": "A simple Node.js blog app that serves Markdown posts",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js"
  },
  "dependencies": {
    "ejs": "^3.1.8",
    "express": "^4.18.2",
    "markdown-it": "^13.0.1",
    "multer": "^1.4.5-lts.1"
  }
}
```

**Installation Command**:
```bash
npm install
```

**Key Packages**:
- **express**: Web server framework
- **markdown-it**: Converts Markdown to HTML
- **ejs**: Template engine for HTML rendering
- **multer**: Middleware for file uploads (prepared for future features)

---

## Project Structure

```
posty-app/
├── server.js                 # Main Express application
├── package.json              # Project configuration
├── package-lock.json         # Locked dependency versions
├── .gitignore                # Git ignore rules
├── README.md                 # Project documentation
├── CONTRIBUTING.md           # Contributing guidelines
├── STUDY_NOTES.md           # This file
│
├── posts/                    # Markdown blog posts
│   ├── welcome-to-my-blog.md
│   └── why-i-like-coding.md
│
├── views/                    # EJS templates
│   ├── index.ejs            # Home page (lists posts)
│   ├── post.ejs             # Individual post view
│   ├── new-post.ejs         # New post creation form
│   └── 404.ejs              # Error page
│
└── public/                   # Static files
    └── style.css            # Stylesheet
```

---

## Key Technologies

### 1. **Node.js**
- Runtime environment for JavaScript on the server
- Version used: v22.17.0 (or higher)

### 2. **Express.js**
- Web framework for handling HTTP requests and routes
- Used for:
  - Serving static files
  - Template rendering
  - Route handling

### 3. **EJS (Embedded JavaScript)**
- Template engine for rendering HTML with dynamic content
- All `.ejs` files are converted to HTML before sending to browser

### 4. **Markdown-it**
- Parses Markdown syntax and converts to HTML
- Supports all standard Markdown features

### 5. **Git & GitHub**
- Version control and repository hosting
- Used for collaboration and issue tracking

---

## MCP & Prompt History

### What is MCP?

MCP stands for Model Context Protocol. In this project, we used MCP-powered tools to interact with GitHub and the local environment in a structured way. It helped us automate repository creation, issue creation, pull request management, and code execution.

### Where MCP Was Used

- Creating the GitHub repository using `mcp_io_github_git_create_repository`
- Creating issues using `mcp_io_github_git_issue_write`
- Creating pull requests using `mcp_io_github_git_create_pull_request`
- Merging pull requests using `mcp_io_github_git_merge_pull_request`
- Closing issues using `mcp_io_github_git_issue_write`
- Activating tool groups such as `activate_repository_creation_tools`, `activate_issue_and_commit_tools`, and `activate_pull_request_management_tools`

### How MCP Was Set Up and Used

1. Activated GitHub repository creation tools to make a new repo on GitHub.
2. Initialized local git with `git init` and configured user identity.
3. Created and pushed the local project to the remote repository.
4. Activated issue and commit tools to create a new issue and later close it.
5. Activated pull request management tools to open, merge, and manage pull requests.
6. Used terminal commands alongside MCP to commit files, push branches, and manage the server.

### Prompt History

These were the main project prompts (user requests) that guided the work:

1. Create a simple Node.js blog app that serves Markdown posts from a folder. It should list posts, render them, and let me add new ones with a form. Include at least one sample Markdown post in the posts folder.
2. Blog app running on http://localhost:3000 Error: Cannot find module 'ejs' Require stack: ...
3. Initialize the current folder as a git repo, create a new GitHub repo named posty-app, and push the contents of this folder to it.
4. Open a new issue called Add contributing guidelines with a short description about creating a CONTRIBUTING.md file for new authors.
5. Create a branch, add a CONTRIBUTING.md file with clear instructions for adding posts, and open a pull request.
6. review and merge the pull request then close the issue.
7. Add a new blog post called Why I Like Coding by Guil H and open a pull request.
8. please create a .md file and all informations and steps/text which we did in this projects as a note to referback if needed to lern how we did this. this is a study project.
9. have you added we lern MCP and how we setup and used it and where we used? list all prompt too.

---

## Step-by-Step Development

### Phase 1: Core Application Development

#### Step 1.1: Create server.js
The main application file that:
- Sets up Express application
- Configures middleware
- Defines all routes
- Handles post operations

**Key Features in server.js**:
```javascript
// Middleware setup
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Helper functions
- getAllPosts() - Reads all .md files and returns post metadata
- getPost(slug) - Reads and renders a specific post

// Routes
- GET / - Home page showing all posts
- GET /new - Form to create new post
- POST /new - Handles post creation
- GET /post/:slug - View individual post
```

#### Step 1.2: Create Views (EJS Templates)

**index.ejs** - Home page
- Displays list of all blog posts
- Shows post title, date, and link
- "Write New Post" button
- No posts message if empty

**post.ejs** - Single post page
- Renders Markdown content as HTML
- Shows back button to home

**new-post.ejs** - Post creation form
- Title input field
- Textarea for Markdown content
- Markdown syntax hints
- Submit and cancel buttons

**404.ejs** - Error page
- Displayed when post not found

#### Step 1.3: Create Styling (style.css)

**Key CSS Features**:
- Modern, clean design
- Responsive layout (mobile-friendly)
- Dark/light color scheme
- Typography optimizations for reading
- Code block styling
- Form styling
- Hover effects and transitions

**CSS Variables Used**:
```css
--primary-color: #2563eb (blue)
--secondary-color: #666 (gray)
--border-color: #e5e7eb (light gray)
--background-color: #f9fafb (off-white)
--text-color: #1f2937 (dark)
```

#### Step 1.4: Create Sample Post

**File**: `posts/welcome-to-my-blog.md`

Contains:
- Introduction to the blog
- Features explanation
- Markdown syntax examples
- Getting started guide
- Feature showcase

This serves as:
- A sample post for visitors to see
- Documentation on how to use the app
- Markdown syntax reference

### Phase 2: GitHub Integration

#### Step 2.1: Initialize Git Repository

```bash
git init
```

This creates a `.git` folder and initializes version control locally.

#### Step 2.2: Configure Git User

```bash
git config user.name "Developer"
git config user.email "dev@example.com"
```

#### Step 2.3: Create Initial Commit

```bash
git add .
git commit -m "Initial commit: Add posty-app blog with markdown support"
```

Files committed:
- All source code
- package.json and package-lock.json
- Views and CSS
- Sample post
- .gitignore

#### Step 2.4: Create GitHub Repository

Using the GitHub API tool:
- Repository name: `posty-app`
- Description: "A simple Node.js blog app that serves Markdown posts"
- Visibility: Public
- No auto-initialization (we're pushing existing code)

Result: https://github.com/sunilmca/posty-app

#### Step 2.5: Push to GitHub

```bash
git remote add origin https://github.com/sunilmca/posty-app.git
git branch -M main
git push -u origin main
```

All local commits are now on GitHub's main branch.

### Phase 3: Contributing Guidelines & Issue Management

#### Step 3.1: Create Contributing Guidelines

**File**: `CONTRIBUTING.md`

Contains:
- Development setup instructions
- How to add blog posts (web form and direct file)
- Markdown syntax guide
- Code style guidelines
- Git workflow instructions
- Pull request process
- Testing procedures
- Issue reporting guidelines

#### Step 3.2: Create GitHub Issue

**Issue #1**: "Add contributing guidelines"

Description:
- Request for CONTRIBUTING.md file
- Guidance on what should be included
- Target audience: new contributors

#### Step 3.3: Create Feature Branch

```bash
git checkout -b add-contributing-guidelines
```

This isolates the work from main branch.

#### Step 3.4: Add CONTRIBUTING.md

Created comprehensive guidelines covering:
- Development setup
- Post creation (2 methods)
- Markdown syntax examples
- Code style standards
- Testing instructions
- Commit message guidelines
- PR process and template

#### Step 3.5: Commit and Push

```bash
git add CONTRIBUTING.md
git commit -m "Add comprehensive contributing guidelines for new authors"
git push -u origin add-contributing-guidelines
```

#### Step 3.6: Create Pull Request

**PR #2**: "Add comprehensive contributing guidelines"

- Base branch: main
- Compare branch: add-contributing-guidelines
- Detailed description of changes
- Related issue: #1

#### Step 3.7: Merge PR and Close Issue

- Merged PR #2 using squash merge method
- Closed Issue #1 with status "completed"

Result: CONTRIBUTING.md is now on main branch

### Phase 4: Adding Blog Posts via GitHub Workflow

#### Step 4.1: Switch to Main and Update

```bash
git checkout main
git pull origin main
```

Ensures we have latest code from GitHub.

#### Step 4.2: Create Feature Branch for Blog Post

```bash
git checkout -b add-blog-post-why-i-like-coding
```

#### Step 4.3: Create Blog Post File

**File**: `posts/why-i-like-coding.md`

**Post Content**:
- Title: "Why I Like Coding"
- Author: Guil H
- Sections:
  - The Joy of Creation
  - Problem-Solving at Its Best
  - Endless Learning
  - Connecting with Others
  - Building Things That Matter
  - Making a Living Doing What You Love
  - The Continuous Challenge
  - Conclusion

#### Step 4.4: Commit Blog Post

```bash
git add posts/why-i-like-coding.md
git commit -m "Add blog post: Why I Like Coding by Guil H"
```

#### Step 4.5: Push and Create PR

```bash
git push -u origin add-blog-post-why-i-like-coding
```

**PR #3**: "Add blog post: Why I Like Coding by Guil H"

---

## File Breakdown

### server.js

**Purpose**: Main application entry point

**Key Components**:

1. **Imports**
```javascript
const express = require('express');
const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
```

2. **Configuration**
```javascript
const app = express();
const md = new MarkdownIt();
const postsDir = path.join(__dirname, 'posts');
```

3. **Middleware Setup**
```javascript
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
```

4. **Helper Function: getAllPosts()**
- Reads all .md files from posts directory
- Extracts metadata (slug, title, date)
- Returns sorted array (newest first)

5. **Helper Function: getPost(slug)**
- Reads specific post file
- Converts Markdown to HTML
- Returns post object with rendered content

6. **Routes**:
- **GET /** - Home page
- **GET /new** - New post form
- **POST /new** - Create new post
- **GET /post/:slug** - View post

7. **Server Start**
```javascript
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Blog app running on http://localhost:${PORT}`);
});
```

### package.json

**Purpose**: Project configuration and dependency management

**Key Sections**:
- `name`: Project identifier
- `version`: Semantic versioning
- `main`: Entry point (server.js)
- `scripts`: npm commands
- `dependencies`: Required packages

**Why Each Dependency**:
- **express**: Web framework (required)
- **markdown-it**: Markdown parsing (required)
- **ejs**: Template engine (required)
- **multer**: File upload handling (prepared for future)

### CONTRIBUTING.md

**Purpose**: Guide for contributors

**Covers**:
- Development environment setup
- Two methods for adding posts
- Markdown syntax guide
- Code style guidelines
- Testing procedures
- Git workflow
- PR process and template
- Issue reporting
- Code of conduct

### README.md

**Purpose**: Project documentation

**Covers**:
- Feature overview
- Project structure
- Installation steps
- Running the app
- Usage instructions
- Customization guide
- Technologies used
- Future enhancements

### Views (EJS Templates)

All `.ejs` files use:
- Standard HTML structure
- CSS classes for styling
- Embedded JavaScript for dynamic content
- Template logic (`<% %>` syntax)

---

## GitHub Workflow

### Workflow Used in This Project

1. **Local Development**
   - Create feature branch from main
   - Make changes locally
   - Test thoroughly

2. **Push to GitHub**
   - Push branch to remote
   - Creates backup and visibility

3. **Open Pull Request**
   - Describe changes
   - Link to related issues
   - Enable team review

4. **Review & Approval**
   - Code review process
   - Feedback and revisions
   - Approve when ready

5. **Merge to Main**
   - Merge method: squash or merge
   - Automatic deletion of feature branch possible
   - Update main branch on all machines

6. **Close Related Issues**
   - Mark issues as completed
   - Reference in PR or commit

### Branches Created

1. **add-contributing-guidelines**
   - Created CONTRIBUTING.md
   - Merged to main via PR #2

2. **add-blog-post-why-i-like-coding**
   - Added why-i-like-coding.md
   - Opened as PR #3

### Pull Requests

- **PR #2**: CONTRIBUTING.md (MERGED)
- **PR #3**: Blog post (OPEN for review)

### Issues

- **Issue #1**: Add contributing guidelines (CLOSED - completed via PR #2)

---

## Blog Posts Created

### 1. welcome-to-my-blog.md

**Location**: `/posts/welcome-to-my-blog.md`

**Content**:
- Welcome message
- Blog features explained
- Getting started instructions
- Markdown syntax examples
- Code samples
- Encouragement to add more posts

**Purpose**: Sample/demo post for the blog

### 2. why-i-like-coding.md

**Location**: `/posts/why-i-like-coding.md`

**Author**: Guil H

**Content**:
- Personal reflection on loving coding
- 8 main reasons for passion
- Deep dive into each reason
- Inspirational conclusion

**Sections**:
1. Joy of Creation
2. Problem-Solving at Its Best
3. Endless Learning
4. Connecting with Others
5. Building Things That Matter
6. Making a Living Doing What You Love
7. The Continuous Challenge
8. Conclusion

---

## Important Commands

### npm Commands

```bash
# Install dependencies
npm install

# Start the application
npm start

# Check for dependency vulnerabilities
npm audit
npm audit fix --force
```

### Git Commands

```bash
# Initialize git repository
git init

# Configure git user
git config user.name "Your Name"
git config user.email "your@email.com"

# Create and switch to branch
git checkout -b branch-name

# Switch to existing branch
git checkout branch-name

# Stage changes
git add .
git add filename

# Commit changes
git commit -m "commit message"

# View commit log
git log
git log --oneline

# Push to remote
git push -u origin branch-name
git push origin main

# Pull from remote
git pull origin main

# Add remote
git remote add origin https://github.com/username/repo.git

# View remotes
git remote -v

# Merge branches
git merge branch-name

# Check status
git status

# View branch list
git branch
git branch -a
```

### GitHub Workflow Commands

```bash
# Create and push feature branch
git checkout -b feature-name
git add .
git commit -m "commit message"
git push -u origin feature-name

# Update feature branch with main changes
git fetch origin
git rebase origin/main

# Clean up after merge
git branch -d feature-name
git push origin --delete feature-name
```

### Terminal Commands (Used in Project)

```bash
# Check port usage
netstat -ano | findstr :3000

# Kill process using port
taskkill /PID 8420 /F

# Start server
npm start

# Navigate directories
cd path/to/directory
pwd  # Current directory

# File operations
ls   # List files
mkdir folder-name
touch filename
```

---

## Lessons Learned

### 1. **Project Planning**
- Start with clear structure and organization
- Plan folder layout before writing code
- Define routes and functionality upfront

### 2. **Express.js Basics**
- Middleware order matters
- Routing is straightforward and flexible
- Static file serving is built-in

### 3. **File-Based Systems**
- No database = simpler setup, limited scalability
- File naming conventions are important (slug generation)
- Sorting by file modification time works well

### 4. **Markdown Processing**
- markdown-it is powerful and easy to use
- Rendering as HTML happens on server-side
- Security: always escape user input

### 5. **Template Engines**
- EJS is simple and intuitive
- Template logic mixed with HTML can get complex
- Components/partials would help for larger projects

### 6. **Git Workflow**
- Feature branches keep main stable
- Meaningful commit messages are crucial
- Pull requests enable code review process

### 7. **GitHub Collaboration**
- Issues help organize work
- PRs track changes and enable discussion
- Linking issues to PRs streamlines workflow

### 8. **Open Source Best Practices**
- CONTRIBUTING.md sets clear expectations
- Good documentation attracts contributors
- Templates (issues, PRs) improve communication

### 9. **CSS/Responsive Design**
- Mobile-first approach is effective
- CSS variables enable easy theming
- Flexbox and Grid simplify layouts

### 10. **Error Handling**
- 404 pages improve UX
- Input validation prevents errors
- Error messages should be helpful

---

## Future Enhancements

Based on the CONTRIBUTING.md suggestions:

1. **Search Functionality** - Find posts by keyword
2. **Tags/Categories** - Organize posts by topic
3. **Comments System** - Reader engagement
4. **Draft Posts** - Save work before publishing
5. **Post Editing** - Modify existing posts
6. **Image Uploads** - Rich media support
7. **Export to PDF** - Archive functionality
8. **Analytics** - Track popular posts
9. **RSS Feed** - Subscription support
10. **Authentication** - Admin controls

---

## How to Use This Document

This document serves as:

1. **Reference Material**: Look up specific commands or processes
2. **Learning Guide**: Understand how the project was built step-by-step
3. **Troubleshooting**: Find solutions to common issues
4. **Template**: Use as basis for future projects
5. **Documentation**: Explain the project to others

---

## Quick Start Reminder

```bash
# 1. Navigate to project
cd c:\Projects\POC\POSTY-APP

# 2. Install dependencies (one time)
npm install

# 3. Start server
npm start

# 4. Open browser
http://localhost:3000

# 5. Create new posts via form or file addition
```

---

## Key Takeaways

- ✅ Node.js + Express enables quick web development
- ✅ File-based systems work for small projects
- ✅ Markdown is excellent for content
- ✅ Git workflow scales from solo to team development
- ✅ Good documentation attracts contributors
- ✅ Templates reduce repetitive coding
- ✅ Testing and validation are important
- ✅ Community and collaboration enhance projects

---

**Last Updated**: May 11, 2026  
**Project Status**: Active (Accepting PRs and Issues)  
**Repository**: https://github.com/sunilmca/posty-app
