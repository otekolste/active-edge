const router = require('express').Router();

const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');
const answerRoutes = require('./answer-routes');

router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/answers', answerRoutes);

module.exports = router;
