const updateUsersWorkerObj = require('../worker/updateusers');
let updateUsersObj = new updateUsersWorkerObj.updateUsersWorkerClass();

class updateUsers {
    updateUsers() { }


    /* function to update user */

    async modifyData(prim_key, params) {
        try {
            console.log(`Params in modifyData service`);
            console.log(params);
            console.log(`Primary key in modifyData service = ${prim_key}`);
            let data = await updateUsersObj.modifyData(prim_key, params);
            console.log(`data in modifyData service`);
            console.log(data);
            return data;
        }
        catch (err) {
            console.log("inside catch block of modifyData service");
            console.log(err);
            throw new Error(err);
        }
    }

    /* ------------------------ */


    /* function to display all records */

    async displayDB() {
        try {
            console.log("Inside displayDB in Service");
            let data = await updateUsersObj.displayDB()
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
    updateUsersServiceClass: updateUsers
}