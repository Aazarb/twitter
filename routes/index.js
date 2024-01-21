const express = require('express');
const router = express.Router();

router.get('/tweet/new',(req,res)=>{
  res.render('tweets/tweet-form');
});


/* GET home page. */
router.get('/', (req, res) => {
  res.render('tweets/tweet-list');
});

module.exports = router;
