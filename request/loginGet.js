const jwt = require('jsonwebtoken');


function loginGet(){
    this.client_a = 'XBhIiwiaWF0I'
    this.client_b = 'ABgISwipiF9L'
    this.token_a = ''
    this.token_b = ''
    this.LOGIN_KEY = 'LOGIN_KEY'
}

loginGet.prototype.createSession= function(requisicao){
        let time = 60*4*7
        this.token_a = jwt.sign({ "CHAVE_CLIENTE": this.client_a, "id": '01' }, this.LOGIN_KEY , { algorithm: 'HS256', expiresIn: time});
        this.token_b = jwt.sign({ "CHAVE_CLIENTE": this.client_b, "id": '02' }, this.LOGIN_KEY , { algorithm: 'HS256', expiresIn: time});
}


module.exports = {
    loginGet: loginGet
}