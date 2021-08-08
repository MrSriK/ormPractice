const models = require('../models');
const usersObj = models.users_master;


class Users {
    Users() { }

    /* function to store data in table */

    storeData(params) {
        return new Promise((resolve, reject) => {
            console.log("Inside storeData in worker");
            console.log(params);
            usersObj.create({
                firstName: params.fname,
                city: params.city
            }).then((data) => {
                console.log('data in storeData worker');
                console.log(data);
                resolve(data);
            }).catch((err) => {
                console.log('Inside catch block of storeData worker');
                console.log(err);
                reject(err);
            })
        })
    }
    /* ---------x--------x-----------x--------------- */

    /* function to display all records */

    displayDB() {
        return new Promise((resolve, reject) => {
            console.log('Inside displayDB in worker');
            usersObj.findAll().then((data) => {
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
    usersWorkerClass: Users
}