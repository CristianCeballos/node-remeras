const express = require('express');
const path = require('path');
const app = express();
const bodyParser= require('body-parser');
const morga= require('morgan');


//middlewares
app.use(morga('dev'));
app.use(bodyParser.json());
//static files
app.use(express.static(path.join(__dirname, 'public/dist/curso-angular')));


app.listen(3000, ()=>{
    console.log('server on port 3000');
});