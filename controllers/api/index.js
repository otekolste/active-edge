const router = require('express').Router();

const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');
const tagRoutes = require('./tag-routes');

router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
