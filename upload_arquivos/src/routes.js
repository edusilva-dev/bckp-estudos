const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')

// Controller
const ImagesController = require('./controllers/ImagesController')

routes.get('/images', new ImagesController().getImages)

routes.post('/posts', multer(multerConfig).single('file'), async (req, res) => {
  try {
    await new ImagesController({
      file: req.file.originalname,
      size: req.file.size,
      key: req.file.filename,
      url: req.file.path
    }).saveImage(req, res)
  } catch (error) {
    console.log(error)
  }
  

  return res.json({ hello: 'Rocket' })
})

module.exports = routes