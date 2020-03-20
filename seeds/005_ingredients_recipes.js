
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients_recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_recipes').insert([
        {recipe_id: 1, ingredient_id: '1'},
        {recipe_id: 2, ingredient_id: '2'},
        {recipe_id: 3, ingredient_id: '3'}
      ]);
    });
};
