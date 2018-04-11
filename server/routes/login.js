var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/api/capital/login', (req, res, next) => {
  console.log(req.body);
  // console.log(req.cookies);
  res.json({
    "status": 0,
    "return_message": "success",
    "result": {
      "userName":"admin",
      "phone":"15278787878",
      "avator":"http://up.qqjia.com/z/face01/face06/facejunyong/junyong27.jpg",
    }
  })
});

module.exports = router;
