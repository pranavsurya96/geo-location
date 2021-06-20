const express = require("express");
const axios = require('axios');
const geocode = require('./geocode')
const app = express();

app.get('', async(req,res) => {
	const resp = await geocode(req)
	res.send({data: resp})

})

app.listen(3000,()=>{
	console.log("Server is running on PORT 3000");
})