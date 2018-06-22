const express = require('express');
const router = express.Router();




let Seller = require('../Models/seller')

// async  -> await  ( avoid callback in save() )

router.post('/addSeller' , async (req,res) => {

let seller = new Seller(req.body);

await seller.save()

res.send(seller)

})




module.exports = router;
