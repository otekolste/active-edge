const express = require('express');
const router = express.Router();

// html Landing page route
router.get('/', (req, res) => {
  // Render the landing page (e.g., Handlebars view)
  res.render('landing', {
    title: 'Welcome to Answer-Hive!',
  });
});
//html route for the login page with a simple title
router.get('/login', (req, res) => {
  res.render('login', {
    title: 'Login to the Answer-Hive!',
  });
});

//html route for sign up page
router.get('/signup', (req, res) => {
  res.render('signup', {
    title: 'Sign up for Answer-Hive!',
  });
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard', {
    title: 'Welcome to the Hive Bee!',
  });
});

module.exports = router;
