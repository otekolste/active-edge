const router = require('express').Router();
const { Answer, Question, Tag, User } = require('../../models');

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