const MongoClient = require('mongodb').MongoClient
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const Config = require('./config/Config')
let Place = require('./classes/Place')
let db;

app.use(bodyParser.urlencoded({extended: true}))

MongoClient.connect(Config.mongodbURL, (err, client) => {
  if (err) return console.log(err);
  db = client.db('cooldallasspots')

  app.get('/', (req, res, next) => {

    db.collection('places').find().toArray(function(err, results) {
      console.log(results)
      res.send(results);
    });
  })

  app.post('/place', (req, res, next) => { // CRUD: C - Creates a new place
    let {title, description, coordinates} = req.body
    if(!(!!title && !!description && !!coordinates)){
      console.log("Error");
    }else{
      coordinates = JSON.parse(coordinates)
      //console.log("Title:", title, "\nDescription:", description ,"\nLong:", coordinates.longitude, "\nLat:", coordinates.latitude)
      console.log("success")
      let newData = new Place(title, description, coordinates);
      console.log("yep: ",newData.print());
      db.collection('places').save(req.body, (err, result) => {
        if (err) return console.log(err)
        console.log(result)
        res.redirect('/')
      })
    }
  });

  app.listen(Config.listenPort, () => {
    console.log("Listening on port 3000")
  })
})
