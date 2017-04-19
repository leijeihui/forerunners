const router = require('express').Router;
const adminCtrl = require('/../controllers/adminCtrl.js');

router.post('/login', adminCtrl.login);
router.post('/signup', adminCtrl.signup);