const jwt = require('jsonwebtoken');
const dot = require('dotenv').config()
const {Autorizacao} = require('../classes/autho');
const {Cliente} = require('../classes/cliente');
const {uploadPost} = require('../request/uploadPost.js');
const {loginGet} = require('../request/loginGet.js');
const {dataGet} = require('../request/dataGet.js');

module.exports = function(app) {
    app.get('/token', function(req, res) {
        let time = 60*4*7
        let session = new loginGet();
        session.createSession();
        res.send([session.token_a, session.token_b]);
    
        
    });
    
    //retorna todos os dados salvos
    app.get('/mysql', (requisicao, resposta) =>{
        let get = new dataGet();
        get.getMysql(requisicao, resposta)
    });
    app.get('/postgres', (requisicao, resposta) =>{
        let get = new dataGet();
        get.getPostgres(requisicao, resposta)
    });
    
    
    //Rota para upload de informação
    app.post('/api', async (requisicao, resposta) =>{
        let process = new uploadPost();
        let msg = process.processRequest(requisicao, resposta)
    
        
    });
};