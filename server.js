var express = require('express')
    app = express()
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose')
    morgan = require('morgan')

app.get('*', (req, res) => {
	res.sendfile('index.html')
})

app.listen(8080, () => {
	console.log('EccemaCy on port 8080')
})