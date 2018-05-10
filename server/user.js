const express = require('express')
const Router = express.Router()
const model = require('./models')
const User = model.getModel('user')

Router.get('/info',(req,res)=>{
    res.json({code:1})
})

Router.post('/register',(req,res)=>{
    const {user,pwd,type} = req.body
    User.findOne({user:user},(err,doc)=>{
        if(doc){
            return res.json({code:1,msg:'username has been registered'})
        }
        User.create({user,pwd,type},(e,d)=>{
            if(e){
                return res.json({code:1,msg:'server is error'})
            }
            res.json({code:0})
        })
    })
})

module.exports = Router
