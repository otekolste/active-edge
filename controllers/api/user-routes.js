const router = require("express").Router();
const { User } = require("../../models");

// CREATE new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      // Create new User from params provided in request
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });

    req.session.save(() => {
      // Save session, including info that user is logged in and the corresponding user ID, and return newly-created user as response
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    res.status(500).json(err); // Catch error
  }
});

module.exports = router;
