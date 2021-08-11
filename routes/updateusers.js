var express = require('express');
var router = express.Router();
const updateUsersService = require('../service/updateusers');
const updateUsersObj = new updateUsersService.updateUsersServiceClass();


router.get('/', function (req, res, next) {
    console.log("inside Update users GET");
    res.render('updateusers');
});


/* Route to update data in DB */

router.post('/', function (req, res, next) {
    try {
        console.log("Inside modifyData route");
        let params = {};
        let prim_key = req.body.prim_key;
        let fname = req.body.fname;
        let city = req.body.city;
        params = {
            fname: fname,
            city: city
        };
        console.log("Params in Route");
        console.log(params);
        updateUsersObj.modifyData(prim_key, params).then((data) => {
            console.log('Data in route');
            console.log(data);
            //res.send(data);
            if (data > 0) {
                let response_obj = {
                    status: 200,
                    data: data
                }
                res.send(response_obj);
            }
            else {
                let response_obj = {
                    status: 404,
                    data: data
                }
                res.send(response_obj);
            }
        }).catch((err) => {
            console.log("Inside Catch of update route");
            console.log(err);
        })
    }
    catch (err) {
        console.log(err);
    }
})


/* ----------------------------- */


/* Route to display all records in DB */

router.get('/displaydb', function (req, res, next) {
    try {
        updateUsersObj.displayDB().then((data) => {
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