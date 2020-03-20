
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {book_id: 1, recipe_name: "shrimp and rice", Qty: '2tbsp', instruction: "instruction wil go here with details of how to make the recipe, including cook times etc..."},

        {book_id: 1, recipe_name: "veggie chili", Qty: '2tbsp', instruction: "instruction wil go here with details of how to make the recipe, including cook times etc..."},

        {book_id: 1, recipe_name: "clam chowder", Qty: '2tbsp', instruction: "instruction wil go here with details of how to make the recipe, including cook times etc..."}
      ]);
    });
};
