const express= require('express');
const server= express();

const recipesRouter= ('../recipes/recipesRouter');

server.use(express.json());
server.use('/api/recipes', recipesRouter);

module.exports= server;