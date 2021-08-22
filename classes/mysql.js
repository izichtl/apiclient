const mysql = require('mysql');

function mysqlDB(){
    this.dbconfig = {
        host: "localhost",
        user: "admin",
        password: "admin",
        database: "admin"
      }

}

mysqlDB.prototype.mySqlInsert = function(body){
    const array = body.contacts
    const conection = mysql.createConnection(this.dbconfig);
    array.forEach(element => {
        let sqlquery = `INSERT INTO contacts ( nome, celular) VALUES ('${element.name}', '${element.cellphone}' ) `;
        conection.query(sqlquery, function (err, result) {
        if (err) throw err;
            console.log("DATA RECORD INSERTED - MySql");
        }); });
    conection.end();
    
 
         
}
mysqlDB.prototype.mysqlSelect = function(body){
    const conection = mysql.createConnection(this.dbconfig);
    let sqlquery = `SELECT * FROM contacts`;

    conection.query(sqlquery, function (err, result) {
        result.forEach(element => {
            console.log(element)
            
        })
        if (err) throw err;
            //console.log(`DATA BASE ERROR:_______${err}`);
        if (result) {
                console.log();
                
        }});
      
    conection.end();
    
}


module.exports = {
    mysqlDB: mysqlDB
}