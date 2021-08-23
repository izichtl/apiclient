const serveStatic = require('serve-static')
const path = require('path')

module.exports = function(app) {

    app.use('/',serveStatic(path.join(__dirname, './dist')))
    app.use('/login',serveStatic(path.join(__dirname, './dist')))
    app.use('/data',serveStatic(path.join(__dirname, './dist')))

};