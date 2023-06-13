const connection = require("../server");

class db {
    constructor(connection) {
        this.connection=connection
    }
    findAllRoles(){
        return this.connection().query("SELECT * FROM roles");
    }
        
}


module.exports = new db(connection);


