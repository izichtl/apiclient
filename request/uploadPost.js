const jwt = require('jsonwebtoken');
const {Autorizacao} = require('../classes/autho');
const {Cliente} = require('../classes/cliente');

function uploadPost(){
}

uploadPost.prototype.processRequest= function(requisicao, resposta){
    let msg = 'Server Error:_____________'
    let auto = requisicao.headers.authorization 
    const autorizacaoObj = new Autorizacao();


    if(!auto){
        msg = `Authorization não encontrado na requisição. Padrão: headers = {Authorization: JWT, Content-Type: application/json }`
        resposta.json({"message" : `${msg}`  })
        
        
    } else {
        const clientObj = new Cliente();
        const isAuto = clientObj.isAuth(requisicao);
        if(isAuto){            
            let sendData = clientObj.processSelector(requisicao, msg, resposta);
            if(!sendData){
                msg = `Erro no Processamento`
                resposta.json({"message" : `${msg}`  })
            }
            
        }else{
            msg = `Autorização informada inválida `
            resposta.json({"message" : `${msg}`  })
        }
        
        
        
    }
    return msg

}


module.exports = {
    uploadPost: uploadPost
}