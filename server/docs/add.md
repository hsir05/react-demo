
### 1. 添加

```
  const mongoose = require('mongoose')
  var Schema = mongoose.Schema;
  var LoginSchema = new Schema({
    userName:{type:String},
    phone:{type:String},
    avator:{stype:String},
  });

  const login = mongoose.model("users",LoginSchema);

  res={...}

  let loginSave =  new login ()
  loginSave.save((err,res) => {
    if(err) {
      return err
    } else {
      console.log(res);
    }
  })

```
### 2. 查找

```
login.find({'userName':req.body.userName},(err, data) => {
  if (err) return handleRrror(err)

  if (data[0]) {
    res.json({
      "status": 0,
      "return_message": "success",
      "result": data
    })
  } else {
    res.json({
      "status": 1,
      "return_message": "fail",
      "result": {}
    })
  }
})

```
