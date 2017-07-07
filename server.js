var express = require('express')
    app = express()
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose')
    morgan = require('morgan')

//configuracion de la app.
//Ruta de directorios estaticos. /public/img -> /img
app.use(express.static(__dirname + '/public'))
//Muestra el log en la consola
app.use(morgan('dev'))
//
app.use(bodyParser.json())
//
app.use(methodOverride())

app.get('*', (req, res) => {
	res.sendFile('./public/index.html')
})

app.listen(8080, () => {
	console.log('EccemaCy on port 8080')
})
