const deleteUsersWorkerObj = require('../worker/deleteusers');
let deleteUsersObj = new deleteUsersWorkerObj.deleteUsersWorkerClass();

class deleteUsers {
    deleteUsers() { }

    /* function to delete user */

    async removeData(prim_key) {
        try {
            console.log(`inside deleteData service>>>primary key=${prim_key}`);
            let data = await deleteUsersObj.removeData(prim_key);
            console.log("data in removeData service");
            console.log(data);
            return data;
        }
        catch (err) {
            console.log("inside catch block of removeData service");
            console.log(err);
            throw new Error(err);
        }
    }

    /* ----x--------x----------x-------- */


    /* function to display all records */

    async displayDB() {
        try {
            console.log("Inside displayDB in Service");
            let data = await deleteUsersObj.displayDB()
            console.log("Inside try of displayDB in Service");
            console.log(data);
            return data;
        }
        catch (err) {
            console.log("Inside catch of displayDB in service");
            console.log(err);
            throw new Error(err);
        }
    }

    /* --------x-----------x--------x--------- */

}


module.exports = {
    deleteUsersServiceClass: deleteUsers
}