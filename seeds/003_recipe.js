
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {book_id: 1, recipe_name: "shrimp and rice", instruction: "instruction wil go here with details of how to make the recipe, including cook times etc..."},

        {book_id: 1, recipe_name: "veggie chili", instruction: "instruction wil go here with details of how to make the recipe, including cook times etc..."},

        {book_id: 1, recipe_name: "clam chowder", instruction: "instruction wil go here with details of how to make the recipe, including cook times etc..."}
      ]);
    });
};
