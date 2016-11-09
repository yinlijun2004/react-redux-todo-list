var express = require("express");
var path = require("path");
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleWare = require('webpack-dev-middleware');
var webpackHotMiddleWare = require('webpack-hot-middleware');

var app = express();

var compile = webpack(config);

app.use(webpackDevMiddleWare(compile, {noInfo:true, publicPath:config.output.publicPath}));
app.use(webpackHotMiddleWare(compile));

app.use(express.static("./dist"));

app.use('/', function(req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

var port = 3000;

app.listen(port, function(err) {
    if (err) throw err;
    console.log("Express server listen on port", port);
})