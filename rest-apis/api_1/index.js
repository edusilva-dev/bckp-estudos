const customExpress = require('./config/customExpress')
const connection = require('./infrastructure/connection')
const Tables = require('./infrastructure/tables')

connection.connect((err) => {
  if (err) console.log(err)
  if (!err) {
    console.log('conectado com sucesso!')

    Tables.init(connection)
    
    const app = customExpress()

    app.listen(3000, () => console.log('server is running on port 3000'))
  }
})