const express = require('express')
const app = express()
const flash = require('connect-flash')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')

require('./config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.set('view engine', 'hbs')
// app.use(express.static(__dirname + '/public'))

app.use(session({secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS', saveUninitialized: true, resave: false}))
app.use(flash())

app.use(function(req, res, next) {
    res.locals.currentUser = req.user
    next()
  })

app.use(require('./routes/indexRoutes.js'))


app.listen(3000, () => {
    console.log('listening on port 3000')
})