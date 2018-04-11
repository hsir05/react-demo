var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage

app.all('/api/capital/login', function(req, res) {
  res.json({
    "status": 0,
    "return_message": "success",
    "result": {
      "userName":"admin",
      "phone":"15278787878",
      "avator":"http://up.qqjia.com/z/face01/face06/facejunyong/junyong27.jpg",
    }
  })
})

app.all('/mtopfilm/buy/undoneopt', function(req, res) {
  res.json({
    "status": 0,
    "return_message": "success",
    "result": null
  })
})

app.listen(5000);
