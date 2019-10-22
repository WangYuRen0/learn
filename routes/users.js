const router = require('express').Router()

router.post('/registry',(req,res)=>{
    console.log(req.body)
    res.send({code:0,msg:'注册成功'})
})

router.post('/login',(req,res)=>{
    res.send({code:0,msg:'登陆成功'})
})

module.exports = router