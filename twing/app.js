const app = require('express')()
const port = process.env.NODE_PORT || 3000
const {TwingEnvironment, TwingLoaderFilesystem} = require('twing')
let loader = new TwingLoaderFilesystem('./templates')
let twing = new TwingEnvironment(loader)
      
app.get('/', function (req, res) {
  twing.render('index.twig', { products: [
    {
      product: 'Camiseta',
      price: 99.99
    },
    {
      product: 'Calça',
      price: 119.99
    },
    {
      product: 'Tênis',
      price: 129.99
    }
  ]}).then((output) => {
      res.end(output)
  })
})

app.get('/name/:name', function (req, res) {      
  twing.render('index.twig', { name: 'edu' }).then((output) => {
    res.end(output)
  })
})

app.listen(port, () => {
  console.log('Node.js Express server listening on port '+port)
})