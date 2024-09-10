const router = require('express').Router();
const { Tag } = require('../../models');

//GET all answers
router.get('/tags', async (req, res) => {
  try {
    const tags = await Tags.findAll({
      
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

