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

mysqlDB.prototype.mySqlInsert = function(data, msg, resposta){
    const conection = mysql.createConnection(this.dbconfig);

    data.forEach(element => {
        let phone = `+${element.pais} (${element.ddd}) ${element.cellphone_a}-${element.cellphone_b}`
        let sqlquery = `INSERT INTO contacts ( nome, celular) VALUES ('${element.name}', '${phone}')`;
    
            conection.query(sqlquery, function (err, r) {
                if (err){
                    msg = 'Erro ao inserir dados - MySql'
                    resposta.json({"message" : `${msg}`  })
                }else{
                    msg = 'Dados inseridos - MySql'
                    resposta.json({"message" : `${msg}`  })
                }
            });
    });
    conection.end();
    
 
         
}
mysqlDB.prototype.mysqlSelect = function(requisicao, resposta){
    const conection = mysql.createConnection(this.dbconfig)  
    let sqlquery = `SELECT * FROM contacts`;
    conection.query(sqlquery, function (err, r) {
        if (err){resposta.send(err)}
        else{resposta.send(r)}

    })
    conection.end();
}


module.exports = {
    mysqlDB: mysqlDB
}