const router = require('express').Router();

const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');
const answerRoutes = require('./answer-routes');
const tagRoutes = require('./tag-routes');

router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/answers', answerRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
