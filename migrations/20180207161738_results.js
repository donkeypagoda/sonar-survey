exports.up = function(knex, Promise) {
  return knex.schema.createTable('results', table => {
    table.increments();
    table.integer('survey_id').references('surveys.id').notNullable().onDelete('CASCADE');
    table.timestamps(true, true);
    table.json('response_array');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('results');
};
