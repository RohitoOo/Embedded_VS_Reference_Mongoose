const express = require('express');
const router = express.Router();




let Car = require('../Models/car')
let Seller = require('../Models/seller')


// async  -> await  ( avoid callback in save() )

router.post('/addCar/:id' , async (req,res) => {

let car = new Car(req.body);

let seller = await Seller.findById(req.params.id)


car.seller = seller

await car.save()

seller.Cars.push(car)

await seller.save();

res.send( seller )

})


router.get('/:id' ,  async (req,res) =>{

let seller = await Seller.findById(req.params.id).populate("Cars" , "model -_id")

res.json( seller)

})






module.exports = router;
