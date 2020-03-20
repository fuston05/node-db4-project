const express= require('express');

//define router
const router= express.Router();

//connect dataAccess
const recipes= require('../data/dataAccess');

//get all recipes
router.get('/', (req, res) => {
  recipes.find()
  .then( recipesRes => {
    res.status(200).json(recipesRes)
  } )
  .catch(error => {
    res.status(500).json({error: "Could not process your request"})
  })
})//end router.get

//get recipe by id
router.get('/:id', (req, res) => {
  const id= parseInt(req.params.id);
  recipes.findById(id)
  .then( recipeByIdRes => {
    res.status(200).json(recipeByIdRes)
  } )
  .catch(error => {
    res.status(500).json({error: "Could not process your request"})
  })
})//end router.get

//get recipe shoppingList
router.get('/:id/shoppingList', (req, res) => {
  const id= parseInt(req.params.id);
  recipes.getShoppingList(id)
  .then( shoppingRes => {
    res.status(200).json(shoppingRes)
  } )
  .catch(error => {
    res.status(500).json({error: "Could not process your request"})
  })
})//end router.get

//get recipe insturctions
router.get('/:id/instructions', (req, res) => {
  const id= parseInt(req.params.id);
  recipes.getInstructions(id)
  .then( instRes => {
    res.status(200).json(instRes)
  } )
  .catch(error => {
    res.status(500).json({error: "Could not process your request"})
  })
})//end router.get

module.exports= router;