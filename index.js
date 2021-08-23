const express = require('express')
var cors = require('cors') 
const PORT = process.env.PORT || 8080
const HOST = '0.0.0.0';
const routes = require('./routes/routes.js');
const views = require('./views/views.js');

const app = express()
app.use(cors())

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use((req, res, next) => {
    const render = res.render;
    const send = res.send;
    res.render = function renderWrapper(...args) {
        Error.captureStackTrace(this);
        return render.apply(this, args);
    };
    res.send = function sendWrapper(...args) {
        try {
            send.apply(this, args);
        } catch (err) {
            //console.error(`Error in res.send | ${err.code} | ${err.message} | ${res.stack}`);
        }
    };
    next();
});

routes(app);
views(app);

app.listen(PORT)
console.log(`Servidor Rodando________${PORT}`)