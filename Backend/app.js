var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var CustomerControllerRouter = require ('./routes/CustomerRoutes')
var RestarantControllerRouter = require ('./routes/RestarantRoutes')
var TableManageControllerRouter = require ('./routes/TableManageRoutes')
var EmployeesControllerRouter = require ('./routes/EmployeesRoutes')
var MenuItemControllerRouter = require ('./routes/MenuItemRoutes')
var CategoryControllerRouter = require ('./routes/CategoryRoutes')
var OrderControllerRouter = require ('./routes/OrderRoutes')
var OrderItemControllerRouter = require ('./routes/OrderItemRoutes')
var PaymentControllerRouter = require ('./routes/PaymentRoutes')
var ReservationsControllerRouter = require ('./routes/ReservationsRoutes')
var InventoryControllerRouter = require ('./routes/InventoryRoutes')
var SuppliersControllerRouter = require ('./routes/SuppliersRoutes')
var DiscountControllerRouter = require ('./routes/DiscountRoutes')
var FeedbackControllerRouter = require ('./routes/FeedbackRoutes')
var BillingControllerRouter = require ('./model/BillingModel')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/CustomerController',CustomerControllerRouter)
app.use('/RestarantController',RestarantControllerRouter)
app.use('/TableManageController',TableManageControllerRouter)
app.use('/EmployeesController',EmployeesControllerRouter)
app.use('/MenuItemController',MenuItemControllerRouter)
app.use('/CategoryController',CategoryControllerRouter)
app.use('/OrderController',OrderControllerRouter)
app.use('/OrderItemController',OrderItemControllerRouter)
app.use('/PaymentController',PaymentControllerRouter)
app.use('/ReservationsController',ReservationsControllerRouter)
app.use('/InventoryController',InventoryControllerRouter)
app.use('/SuppliersController',SuppliersControllerRouter)
app.use('/DiscountController',DiscountControllerRouter)
app.use('/FeedbackController',FeedbackControllerRouter)
app.use('/BillingController',BillingControllerRouter)




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
