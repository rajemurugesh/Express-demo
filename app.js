var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');


//routes
var routes = require('./routes/index');
var users = require('./routes/users');
var products = require('./routes/products');

//init app
var app = express();

app.set('views', path.join(__dirname,'views'));
app.engine('handlebars', exphbs({defaultLayer: 'layout'}));
app.set('view engine', 'handlebars');

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);
app.use('/users', users);
app.use('/products', products);

//set port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
    console.log('server started on port' + app.get('port'));
});


