const models = require('../models');
const deleteUsersObj = models.users_master;

class deleteUsers {
    deleteUsers() { }

    /* function to delete data from table */

    async removeData(prim_key) {
        try {
            console.log(`Inside removeData worker>>>>primarykey=${prim_key}`);
            let data = await deleteUsersObj.destroy({
                where: {
                    id: prim_key
                }
            });
            console.log(`Data in removeData worker`);
            console.log(data);
            return data;
        }
        catch (err) {
            console.log(`Inside catch block of removeData worker`);
            console.log(err);
            throw new Error(err);
        }
    }

    /* ------x-------x---------x------ */

    /* function to display all records */

    async displayDB() {
        try {
            console.log('Inside displayDB in worker');
            let data = await deleteUsersObj.findAll();
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
    deleteUsersWorkerClass: deleteUsers
}