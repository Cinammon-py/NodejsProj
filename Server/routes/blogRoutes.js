const express = require('express');
const router = express.Router();
const Blog = require('../model/blog');

router.get('/', (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 }) // sorting newest to oldest
    .then((result) => {
      res.render('index1', { title: 'All Blogs', blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
//redirects
router.get('/about-us', (req, res) => {
  res.redirect('/about');
});

router.post('/', (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect('/blogs');
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(req.body);
});

router.get('/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  Blog.findById(id)
    .then((result) => {
      res.render('details', { blogs: result, title: 'blog details' });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => res.json({ redirect: '/blogs' }))
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
