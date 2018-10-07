//Profile details, location, bio, experiences

const express = require('express');
const router = express.Router();

//@route  GET api/profile/test
//@desc   Tests profile route
//@access Public

//get profile
router.get('/test', (req, res) => res.json({ msg: 'Profile Works!' }));

module.exports = router;
