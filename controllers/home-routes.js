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
router.get('/userpage', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    try {
      // Fetch questions associated with the logged-in user
      const question = await Question.findAll({
        where: { user_id: req.session.user_id }, // Filter questions by user_id
      });
      // Render the userpage view and pass the questions array
      res.render('userpage', {
        title: "What's the buzz!",
        user_id: req.session.user_id, // Pass the user_id to the view
        logged_in: req.session.logged_in,
        questions: question.map((q) => q.get({ plain: true })), // Pass as plain objects
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error loading user questions.' });
    }
  }
});

//GET a single question by ID
router.get('/questions/:id', async (req, res) => {
  if (!req.session.logged_in) {
    // If user is not logged in, redirect to login page
    res.redirect('/login');
  } else {
    try {
      const questionData = await Question.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Answer,
            include: [
              {
                model: User,
              },
            ],
          },
          {
            model: Tag,
            attributes: ['name'],
          },
        ],
      });
      console.log(questionData);
      if (!questionData) {
        res.status(404).json({ message: 'No question found with this id' });
        return;
      }
      const question = questionData.get({ plain: true });
      console.log(question);
      res.render('post-details', {
        question,
        logged_in: req.session.logged_in,
        user_id: req.session.user_id,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

router.get('/dashboard', async (req, res) => {
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
