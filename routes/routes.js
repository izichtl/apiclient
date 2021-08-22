const jwt = require('jsonwebtoken');
const dot = require('dotenv').config()
const {Autorizacao} = require('../classes/autho');
const {Cliente} = require('../classes/cliente');


module.exports = function(app) {
    app.get('/login', function(req, res) {
        let LOGIN_KEY = 'LOGIN_KEY'
        let time = 60*4
        let macapaToken = jwt.sign({ "CHAVE_CLIENTE": 'XBhIiwiaWF0I', "id": '01' }, LOGIN_KEY , { algorithm: 'HS256', expiresIn: time});
        let varejaoToken = jwt.sign({ "CHAVE_CLIENTE": 'XBhIiwiaWF0I', "id": '02' }, LOGIN_KEY , { algorithm: 'HS256', expiresIn: time});
        res.send(`
                <h1>Login - JWT </h1> 
                <h5>Chave: ${process.env.CHAVE_SECRETA}</h5>
                <h5>Válido por: ${time} segundos</h5>
                <p>Atualize a página para gerar um novo token
                <h4>Token de Login: Cliente - Macapá</h4> 
                
                <textarea id="w3review" name="w3review" rows="4" cols="50">${macapaToken}</textarea>
                <h4>Token de Login: Cliente - Varejão</h4> 
                <h5>Válido por: ${time} segundos</h5>
                <textarea id="w3review" name="w3review" rows="4" cols="50">${varejaoToken}</textarea>
                `);
    
        
    });

    app.get('/a', (requisicao, resposta) =>{
        resposta.json({ "message" : "Login Page" })
    });
    
    
    app.get('/relatorio', async (requisicao, resposta) =>{});
    
    app.post('/api', async (requisicao, resposta) =>{
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
                //console.log(sendData)
            }else{
                msg = `Autorização informada é inválida `
            }
            
            
            
        }
        

    resposta.json({"message" : `${msg}`  })
    

    });
};