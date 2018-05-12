const express = require('express')
const Router = express.Router()
const model = require('./models')
const User = model.getModel('user')
const utils = require('utility')
const filter = {pwd:0,__v:0}

Router.get('/info', (req, res) => {
    const {userid} = req.cookies
    if(!userid){
        return res.json({code:1})
    }
    User.findById(userid,filter).then(doc=>{
        if(doc){
            res.json({code:0,data:doc})
        }
    }).catch(err=>{
        res.json({code:1,msg:'server error'})
    })
})

Router.get('/list', (req, res) => {
    const {type} = req.query
    User.find({type},filter).then(doc => {
        res.json({code:0,data:doc})
    }).catch(err => console.log(err))
})

Router.post('/register', (req, res) => {
    const {user, pwd, type} = req.body
    User.findOne({user: user}, (err, doc) => {
        if (doc) {
            return res.json({code: 1, msg: 'username has been registered'})
        }
        const userModal = new User({user, type, pwd: md5Pwd(pwd)})
        userModal.save().then(doc=>{
            const {user,type,_id} = doc
            res.cookie('userid',_id)
            res.json({code:0,data:{user,type,_id}})
        }).catch(err=>res.json({code: 1, msg: 'server is error'}))
    })
})

Router.post('/login', (req, res) => {
    const {user, pwd} = req.body
    User.findOne({user,pwd:md5Pwd(pwd)},filter).then(doc=>{
        if(!doc){
            return res.json({code:1,msg:'username or password is error'})
        }
        res.cookie('userid',doc._id)
        res.json({code:0,data:doc})
    }).catch(err=>{
        res.json({code:1,msg:'server error'})
        console.log(err)
    })
})

Router.post('/update',(req,res)=>{
    const {userid} = req.cookies
    if(!userid){
        return res.json({code:1})
    }
    const body = req.body
    User.findByIdAndUpdate(userid,body).then(doc=>{
        const data = Object.assign({},{user:doc.user,type:doc.type},body)
        res.json({code:0,data})
    }).catch(err=>{
        res.json({code:1,msg:'server error'})
    })
})

function md5Pwd(pwd) {
    const salt = 'imooc_is_good_39823x8yz@~~@'
    return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router
