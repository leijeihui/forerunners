const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const multiparty = require('connect-multiparty');
const routes = require('./routes/routes.js');

const app = express();
const port = process.env.PORT || 8000;
const multipartyMiddleware = multiparty();

app.use(require('express-session')({
  key: 'session',
  secret: 'SUPER SECRET SECRET',
  store: new MySQLStore({
    host: process.env.HOST || 'localhost',
    user: process.env.USERNAME || 'root', 
    password: process.env.PASSWORD || '',
    database: process.env.DATABASE || 'forerunners'  
  })
})
);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/public'));
app.use(multipartyMiddleware);
app.use('/api', routes);

app.listen(port, () => {
  console.log('listening to port:', port);
});