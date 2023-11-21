const express = require('express');
// express app
const morgan = require('morgan');
//morgan middleware logger
const mongoose = require('mongoose');

const { result } = require('lodash');
const blogroutes = require('./routes/blogRoutes');
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
//app.use(morgan('dev'));

//routes

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about1', { title: 'About' });
});
app.use(blogroutes);
//404 page
app.use((req, res) => {
  res.status(404).render('404-1', { title: '404' });
});
