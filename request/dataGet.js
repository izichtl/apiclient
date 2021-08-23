
const {mysqlDB} = require('../classes/mysql');
const {postgreDB} = require('../classes/postgre');



function dataGet(){
    
}

dataGet.prototype.getMysql= function(requisicao, resposta){
    let mysql = new mysqlDB();
    let response = mysql.mysqlSelect(requisicao, resposta); 
    return response
}
dataGet.prototype.getPostgres= function(requisicao, resposta){
    const postgre = new postgreDB();
    let response = postgre.postgreSelect(requisicao, resposta);
    return response
}


module.exports = {
    dataGet: dataGet
}