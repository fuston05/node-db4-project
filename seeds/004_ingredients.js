
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'Eggs'},
        {ingredient_name: 'Milk'},
        {ingredient_name: 'Sea Salt'}
      ]);
    });
};
