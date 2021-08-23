const jwt = require('jsonwebtoken');
const {postgreDB} = require('./postgre');
const {mysqlDB} = require('./mysql');
const {ClientValidation} = require('./clientvalidation');
const {cleanData} = require('./cleanData');

function Cliente(){

    this.name = '';
    this.data = {};

}
//IDENTIFICA O CLIENTE E ENVIA AO BANCO
Cliente.prototype.processSelector = function(requisicao, msg, resposta){
    const postgre = new postgreDB();
    const mysql = new mysqlDB();
    const validation = new ClientValidation();
    
    if(validation.keyCheck(this.data)){
        let dataProcess = new cleanData();
        let dataName = dataProcess.cleanName(requisicao.body)
        let dataPhone = dataProcess.cleanCellphone(dataName)
    
        if(this.data.id === '01'){
            let myBank = mysql.mySqlInsert(dataPhone, msg, resposta);
            msg = myBank
            
        
        }
        if(this.data.id === '02'){
            let pgBank = postgre.postgreInsert(dataPhone, msg, resposta);
            msg = pgBank
            
        }
    }else{
        msg = 'Chave Cliente Não Autorizada'
        resposta.json({"message" : `${msg}`  })
    }
    return true
}

//VERIFICA SE O TOKEN É VÁLIDO
Cliente.prototype.isAuth = function(req){
    let response = false
    const LOGIN_KEY = 'LOGIN_KEY'
    
    let payload = jwt.verify(req.headers.authorization, LOGIN_KEY, { algorithm: "HS256" }, (err, user) => {
        
        if (err) {  
            return response
            
        } else {  
            return user
        }
    })
    if(payload){
        this.data = payload
        return true
    }else{
        return response
    }
}


module.exports = {
    Cliente: Cliente
}