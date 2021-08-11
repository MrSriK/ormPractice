const addUsersWorkerObj = require('../worker/addusers');
let addUsersObj = new addUsersWorkerObj.addUsersWorkerClass();

class addUsers {
    addUsers() { }

    /* --------function to store data in table---------- */
    storeData(params) {
        return new Promise((resolve, reject) => {
            console.log("Inside storeData in service");
            console.log(params);
            addUsersObj.storeData(params).then((data) => {
                console.log('Inside storeData service then');
                console.log(data);
                resolve(data);
            }).catch((err) => {
                console.log('Inside catch block of storeData service');
                console.log(err);
                reject(err);
            })
        })
    }

    /* -----x-------x-------x---------------- */

    /* function to display all records */

    displayDB(){
        return new Promise((resolve,reject)=>{
            console.log("Inside displayDB in Service");
            addUsersObj.displayDB().then((data)=>{
                console.log("Inside then of displayDB is Service");
                console.log(data);
                resolve(data);
            }).catch((err)=>{
                console.log("Inside catch of displayDB in service");
                console.log(err);
                reject(err);
            })
        })
    }

    /* --------x-----------x--------x--------- */
}

module.exports = {
    addUsersServiceClass: addUsers
}