// import { Tasks } from './models';
const Products = require('./models');
//get all tasks
function readAll(req, res){
	Products.find({})
	.then(data=> res.json(data))
	.catch(errs=> res.json(errs));
}

function readOne(req, res){
	Products.findById(req.params.id)
	.then(data=> res.json(data))
	.catch(errs=> res.json(errs));
}

function deleteOne(req, res){
	Products.findByIdAndRemove(req.params.id)
	.then(data=> res.json(data))
	.catch(errs=> res.json(errs));
}

function updateOne(req, res){
	Products.findByIdAndUpdate(req.params.id, req.body)
	.then(data=> res.json(data))
	.catch(errs=> res.json(errs));
}

function createOne(req, res){
	Products.create(req.body)
	.then(data=> res.json(data))
	.catch(errs=> res.json(errs));
}

function addComment(req, res){
	Products.findByIdAndUpdate(req.params.id, {$push: {reviews: req.body}})
	.then(data=> {
		console.log(data);
		res.json(data);
	})
	.catch(errs=> res.json(errs));
}

module.exports = {
	readAll: readAll,
	readOne: readOne,
	deleteOne: deleteOne,
	updateOne: updateOne,
	createOne: createOne,
	addComment: addComment
};

// module.exports = {readAll, readOne}