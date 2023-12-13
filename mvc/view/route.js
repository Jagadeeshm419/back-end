const express = require('express')

const router = express.Router();

const Con = require('../controller/userCon')


router.get('/getapi', Con.getdata )
router.post('/postapi', Con.postdata )


module.exports = router;