// 1.导入express
const express = require('express')
// 2.创建web服务器
const app = express()

// 监听客户端的GET和POST请求，并向客户端响应具体的内容
app.get('/user',(req, res) => {
  // 调用express提供的res.send() 方法，向客户端响应一个JSON对象
  res.send({name:'feifan', age:'18'})
})
app.post('/user',(req, res) => {
  // 调用express提供的res.send() 方法，向客户端响应一个文本字符串
  res.send('请求成功')
})
app.get('/',(req, res) => {
  // 通过req.query可以获取到客户端发送的查询参数
  // 默认情况下req.query是一个空对象
  console.log(req.query);
  res.send(req.query)
})
// 动态参数
app.get('/user/:id/:name', (req, res) => {
  // req.params是动态匹配到的URL参数，默认也是一个空对象
  console.log(req.params);
  res.send(req.params)
})


// 调用 app.listen(端口号，启动成功后的回调函数)， 启动服务器
app.listen(80, ()=>{
  console.log("express server running at http://127.0.0.1");
})