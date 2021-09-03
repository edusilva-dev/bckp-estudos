const database = require('../models')


class TurmaController {
  static async pegaTodasAsTurmas(req, res) {
    try {
      const todasAsTurmas = await database.Turmas.findAll()
      return res.status(200).json(todasAsTurmas)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmaTurma(req, res) {
    const { id } = req.params
    try {
      const turma = await database.Turmas.findOne({ where: { 
        id: Number(id) 
      }})

      return res.status(200).json(turma)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaTurma(req, res) {
    const novaTurma = req.body
    try {
      const turma = await database.Turmas.create(novaTurma)

      return res.status(200).json(turma)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaTurma(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Turmas.update(novasInfos, { where: { id } })
      const turma = await database.Turmas.findOne({ where: { id: Number(id) }})

      return res.status(200).json(turma)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletaTurma(req, res) {
    const { id } = req.params
    try {
      await database.Turmas.destroy({ where: { id } })
      return res.status(200).json({ message: "Turma has been deleted." })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = TurmaController