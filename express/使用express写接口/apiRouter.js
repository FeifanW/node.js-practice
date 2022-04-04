const express = require('express')
const router = express.Router()

// 在这里挂载对应的路由
// 定义GET接口
router.get('/get', (req, res) => {
  const query = req.query
  res.send({
    status: 0,
    msg:'Get请求成功！',
    data:query   // 需要响应给客户端的数据
  })
})

// 定义POST接口
router.post('/post', (req, res)=>{
  // 通过req,body 获取请求体中包含url-encoded 格式的数据
  const body = req.body
  res.send({
    status: 0,
    msg:'POST 请求成功！',
    data: body
  })
})


// 定义DELETE接口
router.delete('/delete', (req, res)=>{
  res.send({
    status: 0,
    msg:'DELETE 请求成功！',
  })
})

module.exports = router