/*
    path:api/login
*/

const {Router}=require('express');
const { newUser,login, renewToken } = require('../controllers/auth');
const { check } = require('express-validator');
const { validateFields} = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');



const router = Router();


    router.post('/new',[
        check('name','The name is mandatory').not().isEmpty(),
        check('email','The email is mandatory and must comply with its format').not().isEmpty().isEmail(),
        check('password','The password is mandatory and must be secure').not().isEmpty().isStrongPassword(),
        validateFields
    ],newUser);
    router.post('/',[

        check('email','The email is mandatory and must comply with its format').not().isEmpty().isEmail(),
        check('password','The password is mandatory and must be secure').not().isEmpty().isStrongPassword(),
        validateFields
    ],login);


//validateJWT
    router.get('/renew',validateJWT,renewToken);



module.exports=router;