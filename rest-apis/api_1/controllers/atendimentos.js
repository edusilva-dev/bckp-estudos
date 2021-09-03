const atendimentos = require('../models/atendimentos')
const Atendimento = require('../models/atendimentos')

module.exports = app => {
  app.get('/atendimentos', (req, res) => {
    Atendimento.list(res)
  })

  app.get('/atendimentos/:id', (req, res) => {
    const { id } = req.params
    
    Atendimento.searchForId(id, res)
  })

  app.post('/atendimentos', (req, res) => {
    const attendance = req.body

    Atendimento.add(attendance, res)
  })

  app.patch('/atendimentos/:id', (req, res) => {
    const { id } = req.params
    const values = req.body

    Atendimento.update(id, values, res)
  })

  app.delete('/atendimentos/:id', (req, res) => {
    const { id } = req.params

    Atendimento.delete(id, res)
  })
}