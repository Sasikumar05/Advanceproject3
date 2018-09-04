const Routes = require('express').Router();


Router.get('./index',(req,res)=>{
	res.send('this is where the info is');
})


module.export=Router;