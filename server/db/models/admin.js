const knex = require('../index.js');

module.exports = knex.schema.createTableIfNotExists('admins', (admin) => {
  admin.increments();
  admin.string('username');
  admin.string('password');
}).then(() => {
  console.log('admin table created');
});