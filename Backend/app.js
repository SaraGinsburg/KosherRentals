const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//establish placesRoutes and usersRoutes a middlewares
const placesRoutes = require('./routes/places-routes')
const usersRoutes = require('./routes/users-routes')

const HttpError = require('./models/http-error')

const app = express()

app.use(bodyParser.json())

// register placesRoutes and usersRoutes as middleware and forward to placesRoutes and usersRoutes  only if it starts with /api/places and /api/
app.use('/api/places', placesRoutes)
app.use('/api/users', usersRoutes)

app.use((req, res, next) => {
  const error = new HttpError('could not find this route.', 404)
  throw error
})

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error)
  }
  res.status(error.code || 500)
  res.json({ message: error.message || 'an unknow error had occured' })
})

mongoose
  .connect(
    'mongodb+srv://Levi:levi@cluster0.nwurh.mongodb.net/KosherRentals?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(5000) //if the connection was successful, start the backend server
  })
  .catch((err) => {
    console.log(err)
  })
