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


// POST Route to create new Tag.
router.post('/', async (req, res) => {
    try {
        const newTag = await Tag.create({
            tag_name: req.body.tag_name 
        });
        res.status(201).json(newTag); 
    } catch (err) {
        res.status(400).json({ message: 'Error creating tag', error: err.message });
    }
});

module.exports = router;
