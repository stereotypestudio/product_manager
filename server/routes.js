//get all tasks

// const readAll = require('./controller');
const api = require('./controller');
const bp = require('body-parser');
//import readAll

function router(app){
	app.use(bp.json());
	app.get("/api/products", api.readAll);
	app.get("/api/products/:id", api.readOne);
	app.delete("/api/products/:id", api.deleteOne);
	app.patch("/api/products/:id", api.updateOne);
	app.post("/api/products", api.createOne);

}

module.exports = router;