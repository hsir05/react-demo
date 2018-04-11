var express = require('express');
var router = express.Router();
const pubSu = require('./public')

const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var LoginSchema = new Schema({
  userName:{type:String},
  phone:{type:String},
  avator:{stype:String},
});

const login = mongoose.model("users",LoginSchema);

router.post('/api/capital/login', (req, res, next) => {
  console.log(req.body);
  login.find({'userName':req.body.userName},(err, data) => {
    if (err) return handleRrror(err)

    if (data[0] && data[0].userName === req.body.userName && data[0].phone === req.body.phone) {
      res.json(pubSu(data[0]))
    } else {
      res.json({
        "status": 1,
        "return_message": "fail",
        "result": {}
      })
    }
  })
})

function handleRrror(err) {
  console.log(err)
}

module.exports = router;
