const jwt = require('jsonwebtoken');
const {postgreDB} = require('./postgre');
const {mysqlDB} = require('./mysql');

function Cliente(){

    this.name = '';
    this.data = {};

}
//IDENTIFICA O CLIENTE E ENVIA AO BANCO
Cliente.prototype.processSelector = function(req){
    const postgre = new postgreDB();
    const mysql = new mysqlDB();
    
    
    if(this.data.id === '01'){
        console.log('DATABASE: - A')
        //postgre.postgreInsert(req.body);
        //postgre.postgreSelect();
        //postgre.isConected();
        return true
        
    }
    if(this.data.id === '02'){
        console.log('DATABASE: - B')
        //mysql.mySqlInsert(req.body);
        //mysql.mysqlSelect();
        return true
    }
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