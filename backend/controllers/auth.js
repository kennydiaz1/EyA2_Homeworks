const express = require('express')
const { ValidationResult } = require('express-validator')

const crearUsuario = (req, res = express.request) => {
    const { name, email, password } = req.body
    const errors = ValidationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    req.status(200).json({
        ok: true,
        name, email, password
    })
}

const loginUsuario = (req, res = express.request) => {
    
    res.json({
        ok: true,
        msg: 'login'
    })
}

const revalidarToken = (req, res = express.request) => {       
        res.json({
            ok: true,
            msg: 'renew'
        })
    }

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}