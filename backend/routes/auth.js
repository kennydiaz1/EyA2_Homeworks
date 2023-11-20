const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const { crearUsuario, login, revalidarToken } = require('../controllers/auth')
const { validarCampos } = require('../middlewares/validar-campos')



router.post('/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio y debe tener al menos 8 caracteres').isLength({ min: 8 }),
        validarCampos
    ], login)

router.post('/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio y debe tener al menos 8 caracteres').isLength({ min: 8 }),
        validarCampos
    ], crearUsuario)

router.get('/renew', revalidarToken)

module.exports = router;