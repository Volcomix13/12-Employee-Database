const connection = require("./connection");

class Database {
    constructor(connection) {
        this.connection=connection
    }
    // findAllRoles(){
    //     return this.connection().query("SELECT * FROM roles");
    // }
        
}


module.exports = new Database(connection);


