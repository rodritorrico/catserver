//import libraries------------------------
import express from 'express';
import path from 'path';

//import routes---------------------------
import indexRouter from './routes/index';


// setup------------------------------------
let app = express();
 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

console.log("listening to port 3000");

 module.exports = app;
