
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_book').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_book').insert([
        {user_id: 1, book_name: 'scotts_recipes'},
        {user_id: 2, book_name: 'danielles_recipes'},
        {user_id: 3, book_name: 'holiday_recipes'}
      ]);
    });
};
