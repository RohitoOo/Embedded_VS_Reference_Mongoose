let mongoose = require('mongoose');

//Car Schema

let carSchema = mongoose.Schema({

model:
{
  type: String,
},
year:
{
  type: String,
},
seller:
{
  type: mongoose.Schema.Types.ObjectId ,
  ref: "Seller"
}
});

let Car = module.exports = mongoose.model('Car' , carSchema);
