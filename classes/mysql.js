const mysql = require('mysql');

function mysqlDB(){
    this.dbconfig = {
        host: "localhost",
        user: "admin",
        password: "admin",
        database: "admin"
      }
      this.data = []

}

mysqlDB.prototype.mySqlInsert = function(data){

    
    const conection = mysql.createConnection(this.dbconfig);
    data.forEach(element => {
        let phone = `+${element.pais} (${element.ddd}) ${element.cellphone_a}-${element.cellphone_b}`
        let sqlquery = `INSERT INTO contacts ( nome, celular) VALUES ('${element.name}', '${phone}')`;
        conection.query(sqlquery, function (err, result) {
        if (err) throw err;
        });
        console.log(typeof phone);
    });
    conection.end();
    
 
         
}
mysqlDB.prototype.mysqlSelect = function(requisicao, resposta){
    const conection = mysql.createConnection(this.dbconfig)  
    let sqlquery = `SELECT * FROM contacts`;
    conection.query(sqlquery, function (err, r) {
        if (err) throw err;
        resposta.send(r)
    })
    conection.end();
}


module.exports = {
    mysqlDB: mysqlDB
}