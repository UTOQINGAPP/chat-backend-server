const { response}=require('express');
const User=require('../models/user');
const bcrypt=require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');

const newUser= async(req,res=response)=>{
    const {email,password} = req.body;
    try {

        const existsEmail=await User.findOne({email:email});
        if(existsEmail){
            return res.status(400).json({ok:false,msg:'The email is already registered'});
        }
        const userDB= new User(req.body);

        //Encrypt password
        const salt= bcrypt.genSaltSync();
        userDB.password=bcrypt.hashSync(password,salt);
   

        await userDB.save();
        //generate jwt
        const token=await generateJWT(userDB.id);


        res.json({ok:true,userDB,token});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ok:false,msg:'Talk to the administrator'});
    }
    
   
}

const login=async (req,res=response)=>{
    const {email, password}=req.body;
    
    try {
        const userDB=await User.findOne({email});
        if(!userDB){
            return res.status(404).json({ok:false,msg:'The email is not registered'});
        }

        const validPassword=bcrypt.compareSync(password,userDB.password);

        if(!validPassword){
            return res.status(400).json({ok:false,msg:'The password is not valid'});
        }

        const token=await generateJWT(userDB.id);
        res.json({ok:true,userDB,token});

    } catch (error) {
        return res.json({ok:false,msg:'Talk to the administrator'});
    }

    
};

const renewToken =async(req,res=response)=>{

    const uid= req.uid;
    const token = await generateJWT(uid);
    const userDB = await User.findById(uid);



    res.json({ok:true,userDB,token});
};

module.exports={
    newUser,
    login,
    renewToken
}