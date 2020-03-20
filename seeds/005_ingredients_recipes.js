
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients_recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_recipes').insert([
        {qty: '1', recipe_id: 1, ingredient_id: '1'},
        {qty: '2', recipe_id: 1, ingredient_id: '2'},
        {qty: '3', recipe_id: 1, ingredient_id: '3'},
        {qty: '2', recipe_id: 2, ingredient_id: '1'},
        {qty: '2', recipe_id: 2, ingredient_id: '2'},
        {qty: '3', recipe_id: 2, ingredient_id: '3'},
        {qty: '5', recipe_id: 3, ingredient_id: '1'},
        {qty: '4', recipe_id: 3, ingredient_id: '2'},
        {qty: '6', recipe_id: 3, ingredient_id: '3'},
      ]);
    });
};
