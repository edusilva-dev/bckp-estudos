const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaPessoa)
router.get('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.pegaMatricula)
router.post('/pessoas', PessoaController.criaPessoa)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.put('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.atualizaMatricula)
router.delete('/pessoas/:id', PessoaController.deletaPessoa)
router.delete('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.deletaMatricula)

module.exports = router