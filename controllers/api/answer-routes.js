const router = require("express").Router();
const { Answer } = require("../../models");

//create new answer
router.post("/", async (req, res) => {
  try {
    const answerData = await Answer.create({
      content: req.body.content,
      user_id: req.body.user_id,
      question_id: req.body.question_id,
    });
    req.session.save(() => {
      res.status(200).json(answerData);
    });
  } catch (err) {
    res.status(500).json(err); // Catch error
  }
});

module.exports = router;
