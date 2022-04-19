const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'pug')

const rootDir = require('./helpers/path')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(rootDir, 'public')))

const productsRouter = require('./routes/products')
const pagesRouter = require('./routes/pages')
const errorsRouter = require('./routes/errors')

app.use('/products', productsRouter)
app.use('/', pagesRouter)
app.use('/', errorsRouter)

app.listen(3000)
