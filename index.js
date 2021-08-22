const express = require('express')
const PORT = process.env.PORT || 8080
const HOST = '0.0.0.0';
const routes = require('./routes/routes.js');
const views = require('./views/views.js');

const app = express()


app.use(express.urlencoded({extended: true}));
app.use(express.json());

routes(app);
views(app);
app.listen(PORT)
console.log(`Servidor Rodando________${PORT}`)