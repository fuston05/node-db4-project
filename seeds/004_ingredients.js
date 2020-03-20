
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'Eggs'},
        {ingredient_name: 'Milk'},
        {ingredient_name: 'Sea Salt'},
        {ingredient_name: 'Banana Peppers'},
        {ingredient_name: 'Sage'},
        {ingredient_name: 'Garlic'},
        {ingredient_name: 'Butter'},
        {ingredient_name: 'Cheese'},
        {ingredient_name: 'Salsa'},
        {ingredient_name: 'Black Beans'},
        {ingredient_name: 'Brown Rice'},
        {ingredient_name: 'Green Peppers'},
        {ingredient_name: 'Tomatoes'},
      ]);
    });
};
