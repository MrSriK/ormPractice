const models = require('../models');
const deleteUsersObj = models.users_master;

class deleteUsers {
    deleteUsers() { }

    /* function to delete data from table */

    removeData(prim_key) {
        return new Promise((resolve, reject) => {
            console.log(`Inside removeData worker>>>>primarykey=${prim_key}`);
            deleteUsersObj.destroy({
                where: {
                    id: prim_key
                }
            }).then((data) => {
                console.log("data in removeData worker then");
                console.log(data);
                resolve(data)
            }).catch((err) => {
                console.log("Inside catch block of removeData worker");
                console.log(err);
                reject(err);
            })
        })
    }

    /* ------x-------x---------x------ */

    /* function to display all records */

    displayDB() {
        return new Promise((resolve, reject) => {
            console.log('Inside displayDB in worker');
            deleteUsersObj.findAll().then((data) => {
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
    deleteUsersWorkerClass: deleteUsers
}