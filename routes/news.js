const router = require('express').Router()

router.get('/list',(req,res)=>{
    res.send({code:0,msg:'操作成功',data:[{id:1,title:'新闻标题1'}]})
})

router.post('/add',(req,res)=>{
    res.send({code:0,msg:'操作成功'})
})

module.exports = router;