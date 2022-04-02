var express = require('express');
var router = express.Router();
const deleteUsersService = require('../service/deleteusers');
const deleteUsersObj = new deleteUsersService.deleteUsersServiceClass();

router.get('/', function (req, res, next) {
    console.log("inside deleteusers GET");
    res.render('deleteusers');
});

/* ROute to delete data from DB */

router.post('/', async (req, res, next) => {
    try {
        console.log("inside delete user route");
        let prim_key = req.body.params;
        console.log(`Primary key in route=${prim_key}`);
        let data = await deleteUsersObj.removeData(prim_key)
        console.log("Inside then of delete user route");
        console.log(data);
        if (data) {
            let response_obj = {
                status: 200,
                data: data
            };
            res.send(response_obj);
        }
        else {
            let response_obj = {
                status: 404,
                data: data
            }
            res.send(response_obj);
        }
    }
    catch (err) {
        console.log("inside catch of deleteusers route");
        console.log(err);
    }
})

/* ----x--------x-------x-------- */


/* Route to display all records in DB */

router.get('/displaydb', async (req, res, next) => {
    try {
        let data = await deleteUsersObj.displayDB();
        console.log("inside route of displayDB");
        console.log(data);
        res.status(200).json(data);
    }
    catch (err) {
        res.status(400).send(err.message);
        console.log(err);
    }
})


/* --------x--------x--------x--------- */


module.exports = router;