// import modules

import express from 'express'

// create express app

const app = express()

// configure the app (app.set)



// mount middleware (app.use)



// mount routes

app.get('/', (req, res) => res.send('<h1>hello, friend</h1>'))


// tell the app to listen on port 3000

app.listen(3000, () => console.log('Listening on port 3000'))
