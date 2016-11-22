let express = require('express')
let path = require('path')

let app = express()

//开发环境
// app.use('/dev', express.static(__dirname + '/views'))
// app.use('/dev/static', express.static(__dirname + '/static'))

//部署环境
app.use('/', express.static(__dirname + '/dist/views'))
app.use('/static', express.static(__dirname + '/dist/static'))

app.listen(16085, () => {
  console.log('server start at 16085')
})

module.exports = app
