
const { Pool, Client } = require("pg");

function postgreDB(){
    this.dbconfig = {
        user: "admin",
        host: "localhost",
        database: "admin",
        password: "admin",
        port: "5432"
        }

}
postgreDB.prototype.isConected = function(req){
    
    const pool = new Pool(this.dbconfig);
    console.log(pool)
    pool.end();
    
}

postgreDB.prototype.postgreSelect = function(requisicao, resposta){
    
    const pool = new Pool(this.dbconfig);

    pool.query("SELECT * from contacts", (err, r) => {
        if (err){resposta.send(err)}
        else{resposta.send(r.rows)}
        
    });
    pool.end();
    
}
postgreDB.prototype.postgreInsert = function(data, msg, resposta){
    const pool = new Pool(this.dbconfig);
    let check = data.forEach(element => {    
        pool.query(
                `INSERT INTO contacts (nome, celular ) VALUES ('${element.name}', '${element.pais}${element.ddd}${element.cellphone_a}${element.cellphone_b}')`,
                (err, res) => { 
        if (err){
            
        }else{
            
        }
        });
    });
    if(!check){
        msg = 'Erro ao inserir dados - Postgres'
        resposta.json({"message" : `${msg}`  })

    }else{
        msg = 'Dados inseridos - Posgres'
        resposta.json({"message" : `${msg}`  })
    }
    pool.end();
}


module.exports = {
    postgreDB: postgreDB
}