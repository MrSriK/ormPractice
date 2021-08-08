const usersWorkerObj = require('../worker/users');
let usersObj = new usersWorkerObj.usersWorkerClass();

class Users {
    Users() { }

    /* --------function to store data in table---------- */
    storeData(params) {
        return new Promise((resolve, reject) => {
            console.log("Inside storeData in service");
            console.log(params);
            usersObj.storeData(params).then((data) => {
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
            usersObj.displayDB().then((data)=>{
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
    usersServiceClass: Users
}