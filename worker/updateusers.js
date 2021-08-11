const models = require('../models');
const updateUsersObj = models.users_master;

class updateUsers {
    updateUsers() { }

    /* functiion to update data in table */


    modifyData(prim_key, params) {
        return new Promise((resolve, reject) => {
            console.log(`params in modifyData worker`);
            console.log(params);
            params = {
                firstName: params.fname,
                city: params.city
            };
            console.log("rechecking params in modifyData worker");
            console.log(params);
            console.log(`prim_key in modifyData worker=${prim_key}`);
            updateUsersObj.update(params, {
                where: {
                    id: prim_key
                }
            }).then((data) => {
                console.log(`Data in modifyData worker then`);
                console.log(data);
                resolve(data);
            }).catch((err) => {
                console.log("inside catch of modifyData worker");
                console.log(err);
                reject(err);
            })
        })
    }


    /* --------------------------------------------- */


    /* function to display all records */

    displayDB() {
        return new Promise((resolve, reject) => {
            console.log('Inside displayDB in worker');
            updateUsersObj.findAll().then((data) => {
                console.log("Inside then of displayDB");
                console.log(data);
                resolve(data);
            }).catch((err) => {
                console.log("Inside catch of displayDB");
                console.log(err);
                reject(err);
            })
        })
    }


    /* ----------x------x--------x--------- */


}
module.exports = {
    updateUsersWorkerClass: updateUsers
}