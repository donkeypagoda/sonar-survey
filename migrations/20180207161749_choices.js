exports.up = function(knex, Promise) {
  return knex.schema.createTable('choices', table => {
    table.increments();
    table.integer('question_id').references('questions.id').notNullable().onDelete('CASCADE');
    table.string('prompt').notNullable();
    table.string('letter').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('choices');
};
