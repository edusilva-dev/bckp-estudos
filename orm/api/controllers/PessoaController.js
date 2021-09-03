const database = require('../models')

class PessoaController {
  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll()
      return res.status(200).json(todasAsPessoas) 
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaPessoa(req, res) {
    const { id } = req.params
    try {
      const pessoa = await database.Pessoas.findOne({ where: { 
        id: Number(id) 
      }})

      return res.status(200).json(pessoa)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaPessoa(req, res) {
    const novaPessoa = req.body
    try {
      const pessoa = await database.Pessoas.create(novaPessoa)

      return res.status(200).json(pessoa)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaPessoa(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Pessoas.update(novasInfos, { where: { id } })
      const pessoa = await database.Pessoas.findOne({ where: { id: Number(id) }})

      return res.status(200).json(pessoa)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletaPessoa(req, res) {
    const { id } = req.params
    try {
      await database.Pessoas.destroy({ where: { id } })
      return res.status(200).json({ message: "Person has been deleted." })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      const matricula = await database.Matriculas.findOne({ where: { 
        id: Number(matriculaId),
        estudante_id: Number(estudanteId)
      }})

      if (matricula)
        return res.status(200).json(matricula)
      else
        return res.status(200).json({ message: "Nenhum estudante encontrado com essa matricula!" })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaMatricula(req, res) {
    const { estudanteId } = req.params
    const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
    try {
      const matricula = await database.Matriculas.create(novaMatricula)

      return res.status(200).json(matricula)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    const novasInfos = req.body
    try {
      await database.Matriculas.update(novasInfos, { where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } })
      const matricula = await database.Matriculas.findOne({ where: { id: Number(matriculaId) }})

      return res.status(200).json(matricula)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      await database.Matriculas.destroy({ where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } })
      return res.status(200).json({ message: "A matricula foi deletada." })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = PessoaController