const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const hbs = require('hbs')
const passport = require('passport')
require('./config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

// For forms, we want to use the urlencoded feature of body parser:
app.use(bodyParser.urlencoded({ extended: true }))

// Later, when we're working with JSON, we'll want to use the JSON
// feature of body parser:
app.use(bodyParser.json())


app.set('view engine', 'hbs')

app.use(require('./routes/indexRoutes.js'))


app.listen(3000, () => {
    console.log('listening on port 3000')
})