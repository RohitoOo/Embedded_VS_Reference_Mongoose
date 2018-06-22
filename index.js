const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const app = express();


mongoose.connect('mongodb://localhost:27017/cardb')
let db = mongoose.connection;

// Check connection

db.once('open', function() {
  console.log("Connected to MongoDB")
});

// Check for DB errors

db.on('error', function(err) {
  console.log("err")
});



// BODY Parse required Middle ware ( code from github)
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())



// Route files to routes folder

let car = require('./routes/carRoutes');
app.use('/car' , car)

let seller = require('./routes/sellerRoutes');
app.use('/seller' , seller)




app.listen(3000, () =>{
  console.log('We live on Port 3000')
} )
