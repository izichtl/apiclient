
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

postgreDB.prototype.postgreSelect = function(req){
    
    const pool = new Pool(this.dbconfig);
    console.log(pool.connect())

    pool.query("SELECT * from contacts", (err, result) => {
        console.log(result.rows)
    });
    pool.end();
    
}
postgreDB.prototype.postgreInsert = function(body){
    const pool = new Pool(this.dbconfig);
    let array = body.contacts
    array.forEach(element => {
    pool.query(
    `INSERT INTO contacts (nome, celular ) VALUES ('${element.name}', '${element.cellphone}')`,
    (err, res) => { 
        if(err){console.log(err, 'Erro ao inserir!')}
        console.log('Data record inserted - PostGres');
        return res
        });
    });
    pool.end();
}


module.exports = {
    postgreDB: postgreDB
}