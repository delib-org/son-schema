const express = require('express');
const app = express();
const port  = process.env.PORT ||4000;

const mongoose= require('mongoose');
import Statement from './models/statementSchema';


mongoose.connect('mongodb://localhost:27017/test');



const StatementModel = mongoose.model('StatementModel', Statement);

const kitty = new StatementModel({ text: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

app.listen(port, ()=>{
    console.log(`Server listen on port ${port}`);
});