const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')

app.use(bodyParser.json())

const router = require('./routes/fornecedores')
app.use('/api/fornecedores', router)

app.listen(config.get('api.port'), () => {
  console.log(`API is running on port ${config.get('api.port')}`)
})