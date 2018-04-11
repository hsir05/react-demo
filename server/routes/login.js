var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/api/capital/login', (req, res, next) => {
  console.log('----');
  console.log(req.body);
  console.log(req.cookies);
  res.json({
    "status": 0,
    "result":[]
  })
});

module.exports = router;
