const express = require('express');
const app = express();
const transmog = require('./server/routes');
const path = require('path');
app.use(express.static( __dirname + '/public/dist/public' ));
transmog(app);

// app.all("**", (req, res) => res.sendFile(path.join(__dirname, 'public/dist/public')))
app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, function(){
	console.log('listening');
}) 