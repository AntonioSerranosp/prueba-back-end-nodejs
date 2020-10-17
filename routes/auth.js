const { Router } = require('express');
const { check } = require('express-validator');
const { getUser, getUserById, createUser} = require('../controllers/auth');
const { validationsFields } = require('../middlewares/validation-fields');


const router = Router();
/**
 * path: /usuarios
 * Obtiene los usuarios 
 */
router.get('/usuarios', getUser);

/**
 * path: /usuarios/:id
 * Obtiene los usuarios por id 
 */
router.get('/usuarios/:id', getUserById);
/**
 * path: /usuarios/
 * Crea un nuevo usuari
 */

// router.use('/nuevo-usuario', createUserTemplate);
router.post(
    '/usuarios',
    [
        check('name','El nombre es obligatorio').not().isEmpty(),
        validationsFields
        
    ],
    createUser
);


module.exports = router;