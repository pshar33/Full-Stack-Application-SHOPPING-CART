// JavaScript source code
var Product = require('./product');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var products=[
new Product({
name:Circe,
image : './static/images/circe.png',
description : "abcdefg",
availability : 5,
price : 50,
quantity : 1
}),

new Product({
name:Warlight,
image : './static/images/warlight.jpg',
description : "hjasjh",
availability : 5,
price : 100,
quantity : 1
}),

new Product({
name:There There,
image : './static/images/There There.jpg',
description : "dsdsd",
availability : 5,
price : 150,
quantity : 1
}),

new Product({
name:Still me,
image : './static/images/Still me.png',
description : "Still me",
availability : 5,
price : 200,
quantity : 1
}),

new Product({
name:Varina,
image : './static/images/Varina.jpg',
description : "Varina",
availability : 5,
price : 250,
quantity : 1
}),

new Product({
name:Our house,
image : './static/images/Our house.jpg',
description : "Our house",
availability : 5,
price : 300,
quantity : 1
}),

new Product({
name:Fire and Fury,
image : './static/images/Fire and Fury.jpg',
description : "Fire and Fury",
availability : 5,
price : 350,
quantity : 1
}),

new Product({
name:Dread Nation,
image: './static/images/Dread Nation.jpg',
description : "Dread Nation",
availability : 5,
price : 400,
quantity : 1
}),

new Product({
name:The Outsider,
image : './static/images/The Outsider.jpg',
description : "The Outsider",
availability : 5,
price : 450,
quantity : 1
}),

new Product({
name:Red Clocks,
image : './static/images/Red Clocks.jpg',
description : "Red Clocks",
availability : 5,
price : 500,
quantity : 1
}),


];

var flag=0;
for(var i=0;i< products.length;i++){
	products[i].save(function(err,result){
		flag++;
		if(flag == products.length){
			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();
}
