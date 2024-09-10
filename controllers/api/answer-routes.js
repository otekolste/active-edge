const router = require('express').Router();
const { Answer } = require('../../models');

//create new answer
router.post('/', async (req, res) => {
  try {
    const answerData = await Answer.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(answerData);
  } catch (err) {
    res.status(500).json(err); // Catch error
  }
});

module.exports = router;