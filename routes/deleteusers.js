var express = require('express');
var router = express.Router();
const deleteUsersService = require('../service/deleteusers');
const deleteUsersObj = new deleteUsersService.deleteUsersServiceClass();

router.get('/', function (req, res, next) {
    console.log("inside deleteusers GET");
    res.render('deleteusers');
});

/* ROute to delete data from DB */

router.post('/', function (req, res, next) {
    try {
        console.log("inside delete user route");
        let prim_key = req.body.params;
        console.log(`Primary key in route=${prim_key}`);
        deleteUsersObj.removeData(prim_key).then((data) => {
            console.log("Inside then of delete user route");
            console.log(data);
            if(data){
                let response_obj={
                    status:200,
                    data:data
                };
                res.send(response_obj);
            }
            else{
                let response_obj={
                    status:404,
                    data:data
                }
                res.send(response_obj);
            }
        }).catch((err) => {
            console.log("inside catch of deleteusers route");
            console.log(err);
        })
    }
    catch (err) {
        console.log(err);
    }
})

/* ----x--------x-------x-------- */


/* Route to display all records in DB */

router.get('/displaydb', function (req, res, next) {
    try {
      deleteUsersObj.displayDB().then((data) => {
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