const db= require('./db_config');

module.exports= {
  getShoppingList,
  find,
  findById,
  getInstructions,
  remove
};

function find(){
  return db('recipe');
}

function findById(id){
  return db('recipe')
  .where({recipe_id: id})
}

//this works but returns 3 iterations for some reason
function getShoppingList(recipe_id){
  return db('ingredients_recipes as ir')
  .select( 'ir.recipe_id', 'r.recipe_name', 'ir.ingredient_id', 'i.ingredient_name')
  .join('recipe as r', 'r.recipe_id', 'ir.recipe_id')
  .join('ingredients as i')
  .where({'r.recipe_id': recipe_id})
}

function getInstructions(recipe_id){
  return db('recipe')
  .select('recipe_name', 'instruction')
  .where({'recipe_id': recipe_id})
}

function remove(){

}