let mongoose = require('mongoose');

//Seller Schema

let sellerSchema = mongoose.Schema({

Name:
{
  type: String,
},
Email:
{
  type: String,
},
Cars:
[{
  type: mongoose.Schema.Types.ObjectId ,
  ref: "Car"
}]

});

let Seller = module.exports = mongoose.model('Seller' , sellerSchema);
