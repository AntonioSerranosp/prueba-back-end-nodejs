const { response } = require('express');
const { usuarios} = require('../models/users')

const getUser  = (req, res = response ) =>{
    try {
        return res.json({
            ok: true,
            usuarios: usuarios
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}
const getUserById = (req, res = response ) =>{
    
   try {
        const  id = req.params.id;
        const usuario = usuarios.find(function(user){
            return user.id == id
        });

        if (usuario == undefined) {
            return res.status(404).json({
                ok: false,
                error: true,
                mensaje: 'Usuario no encontrado'
            })
        } else {
            return res.json({
                ok:true,
                usuario: usuario
            })
        }
   } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
   }
    
}
const createUser = (req, res = response ) =>{
    
    try {
        const nombre = req.body.nombre

        const id = usuarios.length + 1

        usuarios.push({ id: id, nombre: nombre });
    
        return res.json({
            ok: true,
            mensaje: 'Creado'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
        
    }
    
}
module.exports = {
    getUser,
    getUserById,
    createUser
}