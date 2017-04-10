const knex = require('../index.js');

module.exports = knex.schema.createTableIfNotExists('posts', (post) => {
  post.increments();
  post.string('filename');
  post.string('description', 5000);
  post.integer('admin_id');
}).then(() => {
  console.log('post table created');
});