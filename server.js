const express = require('express');
const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const multer = require('multer');

const app = express();
const md = new MarkdownIt();
const postsDir = path.join(__dirname, 'posts');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ensure posts directory exists
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir);
}

// Helper function to get all posts
function getAllPosts() {
  const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'));
  return files.map(file => {
    const filePath = path.join(postsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const slug = file.replace('.md', '');
    
    // Extract title from first line or filename
    const lines = content.split('\n');
    let title = slug.replace(/-/g, ' ');
    if (lines[0].startsWith('# ')) {
      title = lines[0].replace('# ', '');
    }
    
    return {
      slug,
      title,
      file,
      date: fs.statSync(filePath).mtime
    };
  }).sort((a, b) => b.date - a.date);
}

// Helper function to get a single post
function getPost(slug) {
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  return {
    slug,
    content: md.render(content),
    raw: content
  };
}

// Routes
app.get('/', (req, res) => {
  const posts = getAllPosts();
  res.render('index', { posts });
});

app.get('/new', (req, res) => {
  res.render('new-post');
});

app.post('/new', (req, res) => {
  const { title, content } = req.body;
  
  if (!title || !content) {
    return res.status(400).render('new-post', { error: 'Title and content are required' });
  }
  
  // Create slug from title
  const slug = title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
  
  if (!slug) {
    return res.status(400).render('new-post', { error: 'Title must contain valid characters' });
  }
  
  const filePath = path.join(postsDir, `${slug}.md`);
  
  if (fs.existsSync(filePath)) {
    return res.status(400).render('new-post', { error: 'A post with this title already exists' });
  }
  
  const mdContent = `# ${title}\n\n${content}`;
  fs.writeFileSync(filePath, mdContent, 'utf8');
  
  res.redirect(`/post/${slug}`);
});

app.get('/post/:slug', (req, res) => {
  const post = getPost(req.params.slug);
  if (!post) {
    return res.status(404).render('404');
  }
  res.render('post', { post });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Blog app running on http://localhost:${PORT}`);
});
