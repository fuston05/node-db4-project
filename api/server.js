const express= require('express');
const server= express();
const recipesRouter= require('../recipes/recipesRouter');

server.use(express.json());

server.use('/api/recipes', recipesRouter);

server.get('/', (req, res) => {
  res.send(`<h1>Welcome to my humble server!</h1>`)
});

//fallback
server.use(function notFound(){
  res.status(404).json({error: "Could not find what you are looking for"})
})//end fallback case

module.exports= server;