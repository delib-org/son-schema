"use strict";
exports.__esModule = true;
var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var mongoose = require('mongoose');
var statementSchema_1 = require("./models/statementSchema");
mongoose.connect('mongodb://localhost:27017/test');
var StatementModel = mongoose.model('StatementModel', statementSchema_1["default"]);
var kitty = new StatementModel({ text: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
app.listen(port, function () {
    console.log("Server listen on port " + port);
});
