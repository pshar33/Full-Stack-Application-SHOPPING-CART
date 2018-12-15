var express = require('express');
var app= express();
app.use('/', express.static('static'));
var mongoose = require('mongoose');
var db = mongoose.connection;
var prodDet = require('./product');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
mongoose.connect('mongodb://localhost:27017/shopping');


const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))




app.get('/Items', function (req, res) {

  var products = prodDet.find(function (err, products) {
      if (err) {
          res.send(err);
      }
      res.send(products);
      console.log(products);
  });
})

app.post('/add', function (req, res) {
   var newprod = new prodDet();
   newprod.name = req.body.name;
   newprod.price = req.body.price;
   newprod.quantity = req.body.quantity;

   newprod.save(function (err) {
       if (err) {
           res.send(err);
       }
       res.send({ message: 'Product Created !' })
   })

});

app.put('/update', function (req, res) {
  var itemtoupdate = req.body.description;
  var qtytoupdate = req.body.quantity;
  var newvalues = { $set: { 'availability': qtytoupdate } };
  var c = prodDet.updateOne({ 'description': itemtoupdate }, newvalues, function (err, c) {
      if (err) {
          res.send(err);
      }
      res.send({ message: 'Item Updated !' })
  })
});

app.route('/api')
 .get(function(req, res) {
//    res.send('Got a GET request for /api');
   res.sendFile(__dirname + '/index2.html')
   console.log(__dirname)
 })
 .post(function(req, res) {
   res.send('Got a POST request for /api');
   console.log('Got a POST request for /api');
 })
 .put(function(req, res) {
   res.send('Got a PUT request for /api');
 });

app.listen(8080); // start server

console.log('Listening on port 8080');
