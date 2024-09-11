const express = require('express');
const router = express.Router();
const { Question, User, Answer, Tag, QuestionTag } = require('../models');

// html Landing page route
router.get('/', (req, res) => {
  // Render the landing page (e.g., Handlebars view)
  res.render('landing', {
    title: 'Welcome to Answer-Hive!',
    logged_in: req.session.logged_in,
  });
});
//html route for the login page with a simple title
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    // If user is not logged in, redirect to login page
    res.redirect('/dashboard');
    return;
  }
  res.render('login', {
    title: 'Login to the Answer-Hive!',
    logged_in: req.session.logged_in,
  });
});

//html route for sign up page
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    // If user is not logged in, redirect to login page
    res.redirect('/dashboard');
    return;
  }
  res.render('signup', {
    title: 'Sign up for Answer-Hive!',
    logged_in: req.session.logged_in,
  });
});

//html route test of newquestion.handlebars
router.get('/newquestion', (req, res) => {
  if (!req.session.logged_in) {
    // If user is not logged in, redirect to login page
    res.redirect('/login');
  } else {
    res.render('newquestion', {
      title: "What's the buzz!",
      user_id: req.session.user_id, // Pass the user_id to the view
      logged_in: req.session.logged_in,
    });
  }
});

// html for userpageC
router.get('/userpage', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    res.render('userpage', {
      title: "What's the buzz!",
      user_id: req.session.user_id, // Pass the user_id to the view
      logged_in: req.session.logged_in,
    });
  }
});

// html route for dashboard
router.get('/dashboard', async (req, res) => {
  console.log('-----------------------------');
  console.log('logged in: ' + req.session.logged_in);
  if (!req.session.logged_in) {
    // If user is not logged in, redirect to login page
    res.redirect('/login');
  } else {
    try {
      const questionData = await Question.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Tag,
          },
        ],
        order: [['createdDate', 'DESC']],
      });
      const questions = questionData.map((question) =>
        question.get({ plain: true })
      );
      console.log(questions[0].tags);
      res.render('dashboard', {
        questions,
        logged_in: req.session.logged_in,
        title: 'Welcome to the Hive Bee!',
      });
    } catch (e) {
      res.status(500).json(e);
      console.log(e);
    }
  }
});

module.exports = router;
