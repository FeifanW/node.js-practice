const express = require('express')
const app = express()

// 导入解析表单数据的第三方中间件
const parser = require('body-parser')

app.use(parser.urlencoded({extended: false}))

// 定义一个最简单的中间件函数
const mw = function(req, res, next){
  console.log('这是最简单的中间件函数');
  const time = Date.now()
  req.startTime = time
  // 把流转关系转交给下一个中间件
  next()
}

// 将mw注册为全局生效的中间件
// app.use(mw)

// app.use((req, res, next)=>{
  //   console.log("调用了第二个中间件");
  //   next()
  // })
  

// 新建一个中间件函数
const test = function(req, res, next){
  console.log('这是第三个中间件函数');
  next()
}

// app.get('/',mw,test,(req, res) => {
//   res.send('Get请求接受到了' + req.startTime)
// })

// app.get('/',[mw,test],(req, res) => {
//   throw new Error('服务器内部发生了错误')
//   res.send('Get请求接受到了' + req.startTime)
// })

// app.get('/user',(req, res) => {
//   res.send('在访问User' + req.startTime)
// })

// 内置中间件
// app.use(express.json())
// app.use(express.urlencoded({extended: false}))

app.post('/',(req, res)=>{
  res.send("收到了POST请求")
  console.log("POST请求发送过来的数据",req.body);
})

app.use((err, req, res, next)=>{
  console.log("发生了错误" + err.message);
  res.send("发生了错误" + err.message);
})


app.listen('80',function(){
  console.log("http://127.0.0.1");
})