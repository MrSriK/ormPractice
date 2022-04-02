const models = require('../models');
const addUsersObj = models.users_master;


class addUsers {
    addUsers() { }

    /* function to store data in table */

    async storeData(params) {
        try {
            console.log("inside storeData in worker");
            console.log(params);
            let data = await addUsersObj.create({
                firstName: params.fname,
                city: params.city
            })
            console.log(`data in storeData worker>>>>`);
            console.log(data);
            return data;
        }
        catch (err) {
            console.log(`Inside catch block in storeData worker`);
            console.log(err);
            throw new Error(err);
        }
    }

    /* ---------x--------x-----------x--------------- */

    /* function to display all records */

    async displayDB() {
        try {
            console.log('Inside displayDB in worker');
            let data = await addUsersObj.findAll();
            console.log("Inside try of displayDB");
            console.log(data);
            return data;
        }
        catch (err) {
            console.log("Inside catch of displayDB");
            console.log(err);
            throw new Error(err);
        }
    }


    /* ----------x------x--------x--------- */

}


module.exports = {
    addUsersWorkerClass: addUsers
}