const express = require("express");
const router = express.Router();
const { Question, User, Answer, Tag } = require("../models");

// html Landing page route
router.get("/", (req, res) => {
  // Render the landing page (e.g., Handlebars view)
  res.render("landing", {
    title: "Welcome to Answer-Hive!",
  });
});
//html route for the login page with a simple title
router.get("/login", (req, res) => {
  res.render("login", {
    title: "Login to the Answer-Hive!",
  });
});

//html route for sign up page
router.get("/signup", (req, res) => {
  res.render("signup", {
    title: "Sign up for Answer-Hive!",
  });
});

router.get("/dashboard", async (req, res) => {
  try {
    console.log("hi!");
    const questionData = await Question.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Tag,
        },
      ],
      order: [["createdDate", "DESC"]],
    });
    const questions = questionData.map((question) =>
      question.get({ plain: true })
    );
    console.log(questions);
    res.render("dashboard", {
      questions,
      loggedIn: req.session.loggedIn,
      title: "Welcome to the Hive Bee!",
    });
  } catch (e) {
    res.status(500).json(e);
    console.log(e);
  }
});

module.exports = router;
