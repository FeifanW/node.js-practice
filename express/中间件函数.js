const express = require('express')
const app = express()

// 定义一个最简单的中间件函数
const mw = function(req, res, next){
  console.log('这是最简单的中间件函数');
  const time = Date.now()
  req.startTime = time
  // 把流转关系转交给下一个中间件
  next()
}

// 将mw注册为全局生效的中间件
app.use(mw)

app.use((req, res, next)=>{
  console.log("调用了第二个中间件");
  next()
})

app.get('/',(req, res) => {
  res.send('Get请求接受到了' + req.startTime)
})

app.get('/user',(req, res) => {
  res.send('在访问User' + req.startTime)
})

app.listen('80',function(){
  console.log("http://127.0.0.1");
})