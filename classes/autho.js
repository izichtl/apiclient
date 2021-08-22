function Autorizacao(){

    this.name = 'aaaaaaa';

}

Autorizacao.prototype.haveAuth = function(req){
    const token = req.headers.authorization
    let response = typeof token !== "undefined"
    
    return response
}
Autorizacao.prototype.isClient = function(req){
    const token = req.headers.authorization
    const KEY = process.env.CLIENT_KEY
    let response = (KEY == token); 
    return response
}


module.exports = {
    Autorizacao: Autorizacao
}