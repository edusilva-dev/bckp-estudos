const database = require('../models')

function ImagesController(fileAttributes) {
  this.getImages = async (req, res) => {
    try {
      const images = await database.Images.findAll()

      return res.status(200).json(images)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  this.saveImage = async _ => {
    const newImage = { 
      file: fileAttributes.file,
      size: fileAttributes.size,
      key: fileAttributes.key,
      url: fileAttributes.url
    }
    
    try {
      const image = await database.Images.create(newImage)

      return { status: 200, image}
    } catch (error) {
      return { status: 500, error: error.message }
    }
  }
}

module.exports = ImagesController