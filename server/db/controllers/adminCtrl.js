const admins = require('../models/admin.js');
const app = require('../../server.js');
const db = require('../index.js');
const bcrypt = require('promised-bcrypt');

module.exports = {
  signup: (req, res) => {
    let admin = req.body; //has username and password
    db.select().from('admins').where({username: admin.username}).then(adminData => {
      if (adminData.length) {
        res.send(false);
      } else {
        bcrypt.hash(admin.password).then(hash => {
          admin.password = hash;
          db('admins').insert(admin).then(() => {
            req.session.admin = true;
            res.sendStatus(201);
          });
        });
      }
    });
  },

  login: (req, res) => {
    let admin = req.body; //has username and password;
    db.select().from('admins').where({username: admin.username}).then(adminData => {
      if (adminData.length) {
        bcrypt.compare(admin.password, adminData[0].password).then(isAdmin => {
          if (isAdmin) {
            req.session.admin = true;
            res.sendStatus(201);
          } else {
            res.sendStatus(404); 
          }
        });
      } else {
        res.sendStatus(404); 
      }
    });
  }
};