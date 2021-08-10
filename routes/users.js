var express = require('express');
var router = express.Router();
const usersService = require('../service/users');
const usersObj = new usersService.usersServiceClass();

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log("Inside Index GET");
  res.render('users');
  //res.send('respond with a resource');
});

/* Route to store data in DB */

router.post('/', function (req, res, next) {
  try {
    console.log('Inside storeData users route');
    let fname=req.body.fname;
    let city=req.body.city;
    params = {
      fname:fname,
      city:city
    };
    console.log("params in route");
    console.log(params);
    usersObj.storeData(params).then((data) => {
      console.log('data in route');
      console.log(data);
      res.send(data);
    }).catch((err) => {
      console.log('Inside catch block in Users Route');
      console.log(err);
    })
  }
  catch (err) {
    console.log(err);
  }
})

/* ----x--------x---------x---------- */


/* Route to display all records in DB */

router.get('/displaydb',function(req,res,next){
  try{
    usersObj.displayDB().then((data)=>{
      console.log("inside route of displayDB");
      console.log(data);
      res.send(data);
    }).catch((err)=>{
      console.log("Inside catch of displayDB in route");
      console.log(err);
    })
  }
  catch(err){
    console.log(err);
  }
})

/* --------x--------x--------x--------- */

module.exports = router;
