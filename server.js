// import modules

import express from 'express'
import * as animalsDb from './data/animal-db.js'
import { find } from './data/animal-db.js'

// create express app

const app = express()

// configure the app (app.set)

app.set('view engine', 'ejs')

// mount middleware (app.use)



// mount routes

app.get('/', (req, res) => res.redirect('/home'))

app.get('/home', (req, res) => res.send("<h1>Home Page<h1>"))

app.get('/animals', function(req, res) {
  animalsDb.find({}, function(error, animals) {
    res.render('animals/index', {
      animals: animals,
      error: error
    })
  })
})

// tell the app to listen on port 3000

app.listen(3000, () => console.log('Listening on port 3000'))
