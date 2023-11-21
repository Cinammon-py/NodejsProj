const express = require('express');
// express app
const morgan = require('morgan');
//morgan middleware logger
const mongoose = require('mongoose');
const Blog = require('./model/blog');
const app = express();

const dbURI = 'mongodb+srv://bloguser:test1234@cluster0.0ioti5t.mongodb.net/blogsdb?retryWrites=true&w=majority';
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000), console.log('connected  to db'))
  .catch((err) => console.log(err));

// Register View Engine (Embedded JS)
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

//morgan middleware
// app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about1', { title: 'About' });
});

app.get('add/blog', (req, res) => {
  const blog = new blog({
    title: 'new blog 1',
    snippet: 'about my new blog',
    body: 'more about the new blog',
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
//redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about1');
});

app.post('/blogs', (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render('index1', { title: 'All blogs', blog: result });
    });
  console.log(req.body);
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create' });
});

//404 page
app.use((req, res) => {
  res.status(404).render('404-1', { title: '404' });
});
