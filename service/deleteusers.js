const deleteUsersWorkerObj = require('../worker/deleteusers');
let deleteUsersObj = new deleteUsersWorkerObj.deleteUsersWorkerClass();

class deleteUsers {
    deleteUsers() { }

    /* function to delete user */

    removeData(prim_key) {
        return new Promise((resolve, reject) => {
            console.log(`inside deleteData service>>>primary key=${prim_key}`);
            deleteUsersObj.removeData(prim_key).then((data) => {
                console.log("data in removeData service");
                console.log(data);
                resolve(data);
            }).catch((err) => {
                console.log("inside catch block of removeData service");
                console.log(err);
                reject(err);
            })
        })
    }

    /* ----x--------x----------x-------- */


    /* function to display all records */

    displayDB(){
        return new Promise((resolve,reject)=>{
            console.log("Inside displayDB in Service");
            deleteUsersObj.displayDB().then((data)=>{
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
    deleteUsersServiceClass: deleteUsers
}