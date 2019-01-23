const express = require('express')
const app = express()
const hbs = require('hbs')

app.set('view engine', 'hbs')

app.use(require('./routes/indexRoutes.js'))
app.listen(3000, () => {
    console.log('listening on port 3000')
})