const updateUsersWorkerObj = require('../worker/updateusers');
let updateUsersObj = new updateUsersWorkerObj.updateUsersWorkerClass();

class updateUsers {
    updateUsers() { }


    /* function to update user */

    modifyData(prim_key, params) {
        return new Promise((resolve, reject) => {
            console.log(`Params in modifyData service`);
            console.log(params);
            console.log(`Primary key in modifyData service = ${prim_key}`);
            updateUsersObj.modifyData(prim_key, params).then((data) => {
                console.log(`Data in modifyData service`);
                console.log(data);
                resolve(data);
            }).catch((err) => {
                console.log("inside catch block of modifyData service");
                console.log(err);
                resolve(err);
            });
        })
    }


    /* ------------------------ */


    /* function to display all records */

    displayDB() {
        return new Promise((resolve, reject) => {
            console.log("Inside displayDB in Service");
            updateUsersObj.displayDB().then((data) => {
                console.log("Inside then of displayDB is Service");
                console.log(data);
                resolve(data);
            }).catch((err) => {
                console.log("Inside catch of displayDB in service");
                console.log(err);
                reject(err);
            })
        })
    }

    /* --------x-----------x--------x--------- */

}
module.exports = {
    updateUsersServiceClass: updateUsers
}