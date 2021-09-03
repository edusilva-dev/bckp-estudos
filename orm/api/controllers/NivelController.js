const database = require('../models')

class NivelController {
  static async pegaTodosOsNiveis(req, res) {
    try {
      const todosOsNiveis = await database.Niveis.findAll()
      return res.status(200).json(todosOsNiveis)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmNivel(req, res) {
    const { id } = req.params
    try {
      const nivel = await database.Niveis.findOne({ where: { 
        id: Number(id) 
      }})

      return res.status(200).json(nivel)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaNivel(req, res) {
    const novoNivel = req.body
    try {
      const nivel = await database.Niveis.create(novoNivel)

      return res.status(200).json(nivel)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaNivel(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Niveis.update(novasInfos, { where: { id } })
      const nivel = await database.Niveis.findOne({ where: { id: Number(id) }})

      return res.status(200).json(nivel)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletaNivel(req, res) {
    const { id } = req.params
    try {
      await database.Nivel.destroy({ where: { id } })
      return res.status(200).json({ message: "Level has been deleted." })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = NivelController