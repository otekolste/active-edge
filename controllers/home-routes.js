const router = require('express').Router();
const { Answer, Question, Tag, User } = require('../models');

// GET all questions
router.get('/questions', async (req, res) => {
  try {
    const questions = await Question.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Answer,
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: Tag,
          attributes: ['name'],
        },
      ],
    });
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET a single question by ID
router.get('/questions/:id', async (req, res) => {
  try {
    const question = await Question.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Answer,
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: Tag,
          attributes: ['name'],
        },
      ],
    });
    if (!question) {
      res.status(404).json({ message: 'No question found with this id' });
      return;
    }
    res.status(200).json(question);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET all answers
router.get('/answers', async (req, res) => {
  try {
    const answers = await Answer.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Question,
          attributes: ['title'], //Include related question title (optional)
        },
        {
          model: Tag,
          attributes: ['name'],
        },
      ],
    });
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET answer by id
router.get('/answer/:id', async (req, res) => {
  try {
    const answer = await Answer.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attribute: ['username'],
        },
        {
          model: Question,
          attribute: ['title'],
        },
        {
          model: Tag,
          attribute: ['name'],
        },
      ],
    });
    if (!answer) {
      res.status(404).json({ message: 'No answer found with this id' });
      return;
    }
    res.status(200).json(answer);
  } catch (err) {
    res.status(500).json(err);
  }
});
