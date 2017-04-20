const routes = require('express').Router();
const adminCtrl = require('../db/controllers/adminCtrl.js');

routes.post('/login', adminCtrl.login);
routes.post('/signup', adminCtrl.signup);

module.exports = routes;