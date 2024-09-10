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

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


// Logout router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      // Destroy the session
      res.status(204).end(); // End response process
    });
  } else {
    res.status(404).end(); // If user isn't logged in, respond with not found and end response process
  }



module.exports = router;
