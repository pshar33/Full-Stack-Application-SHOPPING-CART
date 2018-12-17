var express = require('express');
var app= express();
app.use('/', express.static('static'));
var mongoose = require('mongoose');
var db = mongoose.connection;
var prodDet = require('./product');
var userDet = require('./src/app/users');
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
      //console.log(products);
  });
})

app.post('/add', function (req, res) {

   var newprod = new prodDet();
   newprod.description = req.body.description;
   newprod.price = req.body.price;
   newprod.quantity = req.body.quantity;

   newprod.save(function (err) {
       if (err) {
           res.send(err);
       }
       res.send({ message: 'Product Created !' })
   })

});

app.get('/getreview', function (req, res) {

  var summary = userDet.find(function (err, summary) {
      if (err) {
          res.send(err);
      }
      res.send(summary);
      console.log(summary);
  });
})

app.post('/addreview', function (req, res) {

var userprod = new userDet();
   userprod.rating = req.body.rating;
   userprod.review = req.body.review;
   userprod.name = req.body.name;
   userprod.product = req.body.product;
console.log(userprod);   
   userprod.save(function (err) {
       if (err) {
           res.send(err);
       }
       res.send({ message: 'Ratings and reviews added !' })
   })

});


app.put('/update', function (req, res) {
//console.log('hi');
//console.log(req.body._id);

  var itemtoupdate = req.body.description;
  var qtytoupdate = req.body.quantity;
  var updateprice=req.body.price;
  var newvalues = { $set: { 'price': updateprice,'quantity': qtytoupdate } };
  var c = prodDet.updateOne({ 'description': itemtoupdate }, newvalues, function (err, c) {
      if (err) {
          res.send(err);
      }
      res.send({ message: 'Item Updated !' })
  })
});

app.post('/delete', function (req, res){
console.log('del');
var itemtodelete = req.body;
var iddelete=req.body._id
console.log(iddelete);
var del=prodDet.deleteOne({ '_id': iddelete },function (err, c){

res.send({ message: 'Item Deleted !' })
});
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
