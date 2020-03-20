
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_book').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_book').insert([
        {user_id: 1, book_name: 'scotts_recipes'}
      ]);
    });
};
