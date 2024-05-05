const express  = require('express')
const router = express.Router()

const UsuarioController = require('./controllers/UsuarioController')

router.get('/usuarios', UsuarioController.buscarTodos)
router.get('/usuarios/:id_usu', UsuarioController.buscarUm)
router.post('/usuarios', UsuarioController.inserir)
router.put('/usuarios/:id_usu', UsuarioController.alterar)
router.delete('/usuarios/:id_usu', UsuarioController.excluir)

module.exports = router