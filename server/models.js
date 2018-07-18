const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/product_manager_db', function(){
	console.log('Connected!')
});

// const ReviewSchema = new mongoose.Schema({
// 	review: Number,
// 	comment: String
// })

const ProductSchema = new mongoose.Schema({
	title: {type: String, required: true, minlength: [3, "This isn't working"]},
	price: {type: String, default: "", required: true},
	imageUrl: {type: String}
}, {timestamps: true})

const Products = mongoose.model('products', ProductSchema);

module.exports = Products