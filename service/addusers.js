const addUsersWorkerObj = require('../worker/addusers');
let addUsersObj = new addUsersWorkerObj.addUsersWorkerClass();

class addUsers {
    addUsers() { }

    /* --------function to store data in table---------- */
    
    async storeData(params){
        try {
            console.log("Inside storeData in service");
            console.log(params);    
            let data = await addUsersObj.storeData(params);
            console.log('Inside storeData service ');
            console.log(data);
            return data;
        } 
        catch (err) {
            console.log('Inside catch block of storeData service');
            console.log(err);
            throw new Error(err);
        }
    }

    /* -----x-------x-------x---------------- */

    /* function to display all records */

    async displayDB() {
        try {
            console.log("Inside displayDB in Service");
            let data = await addUsersObj.displayDB()
            console.log("Inside try of displayDB is Service");
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
    addUsersServiceClass: addUsers
}