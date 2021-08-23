const jwt = require('jsonwebtoken');
const {Autorizacao} = require('../classes/autho');
const {Cliente} = require('../classes/cliente');

function uploadPost(){
}

uploadPost.prototype.processRequest= function(requisicao){
    let msg = 'Server Error:_____________'
    let auto = requisicao.headers.authorization 
    const autorizacaoObj = new Autorizacao();


    if(!auto){
        msg = `Authorization não encontrado na requisição. Padrão: headers = {Authorization: JWT, Content-Type: application/json }`
        
        
    } else {
        const clientObj = new Cliente();
        const isAuto = clientObj.isAuth(requisicao);
        if(isAuto){
            msg = `Usuário Logado`
            let sendData = clientObj.processSelector(requisicao);
            if(sendData){
                
            }else{
                msg = `Chave Secreta inválida `
            }
        }else{
            msg = `Autorização informada inválida `
        }
        
        
        
    }
    return msg

}


module.exports = {
    uploadPost: uploadPost
}