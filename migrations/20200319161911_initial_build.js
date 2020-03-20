
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
    tbl.increments('user_id')

    tbl.string('email')
    .unique()
    
    tbl.string('name')
    .notNullable()
    .index()
  })// end usersa
  
    .createTable('ingredients', tbl => {
      tbl.increments('ingredient_id');
  
      tbl.string('ingredient_name')
        .unique()
        .notNullable();
  
    })//end ingredients

  .createTable('recipe_book', tbl => {
    tbl.increments('book_id')

    tbl.string('book_name')
      .notNullable()
      .index();

      tbl.integer('user_id')
        .unsigned()
        .references('user_id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  })//end recipe_book

  .createTable('recipe', tbl => {
    tbl.increments('recipe_id');

    tbl.string('recipe_name')
      .notNullable()
      .unique();

    tbl.float('Qty')
      .unsigned()
      .notNullable();

    tbl.text('instruction')
    .notNullable();

    tbl.timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    
    tbl.integer('book_id')
    .unsigned()
    .notNullable()
    .references('book_id')
    .inTable('recipe_book')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');
  })//end recipe

  .createTable('ingredients_recipes', tbl => {
    tbl.primary(['recipe_id', 'ingredient_id'])

    tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('recipe_id')
      .inTable('recipe')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
      
    tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('ingredient_id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  })//end ingredients_recipes
};//end UP

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('ingredients_recipes')
  .dropTableIfExists('recipe')
  .dropTableIfExists('recipe_book')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('users');
};//end DOWN
