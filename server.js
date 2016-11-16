/**
 * Created by Administrator on 2016/11/9.
 */
const path = require('path');
const express = require('express');

//var router = require('./routes/index');

const app = express();
app.use('/view', express.static(__dirname + '/view'));
app.use('/static', express.static(__dirname+'/static'));


const server = require('http').createServer(app).listen(9798, function(){
    console.log('server start at 9798');
});


// cors 开启CORS跨域访问
//app.all('*', function (req, res, next) {
//    res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , Origin');
//    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//
//    if (req.method == 'OPTIONS') {
//        res.send(200); //让options请求快速返回
//    }
//    else {
//        next();
//    }
//});

//app.use('/api', router);

//app.use(function(req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});
module.exports = app;