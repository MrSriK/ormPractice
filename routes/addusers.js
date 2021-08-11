var express = require('express');
var router = express.Router();
const addUsersService = require('../service/addusers');
const addUsersObj = new addUsersService.addUsersServiceClass();

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log("Inside Add Users GET");
  res.render('addusers');
  //res.send('respond with a resource');
});

/* Route to store data in DB */

router.post('/', function (req, res, next) {
  try {
    console.log('Inside storeData users route');
    let fname = req.body.fname;
    let city = req.body.city;
    params = {
      fname: fname,
      city: city
    };
    console.log("params in route");
    console.log(params);
    addUsersObj.storeData(params).then((data) => {
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

router.get('/displaydb', function (req, res, next) {
  try {
    addUsersObj.displayDB().then((data) => {
      console.log("inside route of displayDB");
      console.log(data);
      res.send(data);
    }).catch((err) => {
      console.log("Inside catch of displayDB in route");
      console.log(err);
    })
  }
  catch (err) {
    console.log(err);
  }
})

/* --------x--------x--------x--------- */

module.exports = router;
