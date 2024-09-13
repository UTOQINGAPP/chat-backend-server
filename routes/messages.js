/*
    path:api/messages
*/

const {Router}=require('express');
const { validateJWT } = require('../middlewares/validate-jwt');
const { getchat } = require('../controllers/messages');


const router = Router();




    router.get('/:to',validateJWT,getchat);



module.exports=router;