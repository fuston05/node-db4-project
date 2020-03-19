const express= require('express');
//define router
const router= express.Router();

//connect dataAccess
const recipes= require('../data/dataAccess');

router.get('/', (req, res) => {
  res.status(200).json({messge: "Success!"})
})//end router.get

module.exports= router;