const models = require('../models');
const updateUsersObj = models.users_master;

class updateUsers {
    updateUsers() { }

    /* functiion to update data in table */

    async modifyData(prim_key, params) {
        try {
            console.log(`params in modifyData worker`);
            console.log(params);
            params = {
                firstName: params.fname,
                city: params.city
            };
            console.log(`Params after making changes`);
            console.log(params);
            console.log(`prim_key in modifyData worker=${prim_key}`);
            let data = await updateUsersObj.update(params, {
                where: {
                    id: prim_key
                }
            });
            console.log(`Data in modifyData worker then`);
            console.log(data);
            return data;
        }
        catch (err) {
            console.log("inside catch of modifyData worker");
            console.log(err);
            throw new Error(err);
        }
    }

    /* --------------------------------------------- */


    /* function to display all records */


    async displayDB() {
        try {
            console.log('Inside displayDB in worker');
            let data = await updateUsersObj.findAll();
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
    updateUsersWorkerClass: updateUsers
}