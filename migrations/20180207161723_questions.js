exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', table => {
    table.increments();
    table.integer('survey_id').references('surveys.id').notNullable().onDelete('CASCADE');
    table.string('prompt').notNullable();
    table.string('type').notNullable();
    table.integer('order').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('questions');

};
