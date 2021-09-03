const moment = require('moment')
const connection = require('../infrastructure/connection')

class Atendimento {
  add(attendance, res) {
    const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
    const data = moment(attendance.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')

    const dateIsValid = moment(data).isSameOrAfter(dataCriacao)
    const clientIsValid = attendance.cliente.length >= 5

    const validations = [
      {
        name: 'data',
        valid: dateIsValid,
        message: 'Data deve ser maior ou igual a data atual.'
      },
      {
        name: 'cliente',
        valid: clientIsValid,
        message: 'Cliente deve ter pelo menos 5 caracteres.'
      }
    ]

    const errors = validations.filter(field => !field.valid)
    const existErrors = errors.length

    if (existErrors) {
      res.status(400).json(errors)
      return
    }

    const attendanceDate = {...attendance, dataCriacao, data}
    const sql = `INSERT INTO atendimentos SET ?`

    connection.query(sql, attendanceDate, (err, result) => {
      if (err) {
        res.status(400).json(err)
        return
      }
      
      res.status(201).json(attendance)
    })
  }

  list(res) {
    const sql = "SELECT * FROM atendimentos"

    connection.query(sql, (err, result) => {
      if (err) {
        res.status(400).json(err)
        return
      }

      res.status(200).json(result)
    })
  }

  searchForId(id, res) {
    const sql = `SELECT * FROM atendimentos WHERE id = ${id}`
    
    connection.query(sql, (err, result) => {
      const atendimento = result[0]
      if (err) {
        res.status(400).json(err)
      }

      res.status(200).json(atendimento)
    })
  }

  update(id, values, res) {
    if (values.data) {
      values.data = moment(values.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
    }

    const sql = "UPDATE atendimentos set ? WHERE id = ?"

    connection.query(sql, [values, id], (err, result) => {
      if (err) {
        res.status(400).json(err)
      }

      res.status(200).json({ id })
    })
  }

  delete(id, res) {
    const sql = "DELETE FROM atendimentos WHERE id = ?"

    connection.query(sql, id, (err, result) => {
      if (err) {
        res.status(400).json(err)
        return
      }

      res.status(200).json({ id })
    })
  }
}

module.exports = new Atendimento