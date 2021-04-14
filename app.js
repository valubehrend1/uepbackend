const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


/* app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    next();
});

app.options('/*', function(req, res, next){
     res.header('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, x-acces-token');
     res.send(200);

 }) */

const usersRouter = require('./routes/users');
const indexRouter = require('./routes/index');

app.use('/users',usersRouter);
app.use('/', indexRouter);


//Error Handler function
// app.use(function(err, req,res,next) {
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     res.sendStatus(err.status || 500);
//     res.json({message:'Ha ocurrido un error'});
// });
// //

app.listen(3000);