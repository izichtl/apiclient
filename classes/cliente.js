const jwt = require('jsonwebtoken');
const {postgreDB} = require('./postgre');
const {mysqlDB} = require('./mysql');
const {ClientValidation} = require('./clientValidation');
const {cleanData} = require('./cleanData');

function Cliente(){

    this.name = '';
    this.data = {};

}
//IDENTIFICA O CLIENTE E ENVIA AO BANCO
Cliente.prototype.processSelector = function(req){
    const postgre = new postgreDB();
    const mysql = new mysqlDB();
    const validation = new ClientValidation();
    
    if(validation.keyCheck(this.data)){
        let dataProcess = new cleanData();
        let dataName = dataProcess.cleanName(req.body)
        let dataPhone = dataProcess.cleanCellphone(dataName)
    
        if(this.data.id === '01'){
            
            
            
        
        //  postgre.postgreInsert(dataPhone);
        //  postgre.postgreSelect();
        //  postgre.isConected();
            return true
        
        }
        if(this.data.id === '02'){
            mysql.mySqlInsert(dataPhone);
            
        return true
        }
    }
    console.log('CHAVE') 
    return false
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