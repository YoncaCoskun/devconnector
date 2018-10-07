//posts details

const express = require('express');
const router = express.Router();

//@route  GET api/posts/test
//@desc   Tests post route
//@access Public

//get post
router.get('/test', (req, res) => res.json({ msg: 'Posts Works!' }));

module.exports = router;
