var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const models = require('./models');

var indexRouter = require('./routes/index');
var addUsersRouter = require('./routes/addusers');
var deleteUsersRouter=require('./routes/deleteusers');
var updateUsersRouter=require('./routes/updateusers');

var app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine("html", require("ejs").renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/addusers', addUsersRouter);
app.use('/deleteusers',deleteUsersRouter);
app.use('/updateusers',updateUsersRouter);

//catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

/* ------------Run during table creation------------- */

// models.sequelize.sync().then(function(){
//     app.listen(3000,function() {
//         console.log("Listening to port 3000");
//     });
// })

/* ----------x--x--x--------------- */

/* ----------Else Run during normal execution-----------*/

app.listen(3000, function () {
    console.log("Listening to port 3000");
});

/* --------------x--x--x-------------------------------*/

//error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //render the status page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
