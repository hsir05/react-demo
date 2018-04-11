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

    let loginSave =  new login ()
    loginSave.save((err,res) => {
      if(err) {
        return err
      } else {
        console.log(res);
      }
    })
  login.find({'userName':req.body.userName},(err, data) => {
    if (err) return handleRrror(err)

    if (data[0]) {
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
