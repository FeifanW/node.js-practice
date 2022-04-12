const express = require('express')
const app = express()

// 配置session中间件
const session = require('express-session')
app.use(
  session({
    secret:'test',
    resave:false,
    saveUninitialized:true,
  })
)

app.use(express.urlencoded({extended: false}))

// 登录的API接口
app.post('/api/login', (req, res) => {
  // 判断用户提交的登录信息是否正确
  if(req.body.username != 'admin' || req.body.password !== '000000'){
    return res.send({ status:1, msg:'登录失败'})
  }
  // 登录成功的用户信息保存到Session中
  // 只有成功配置了express-session这个中间件之后，才能够req点出来session这个属性
  req.session.user = req.body
  req.session.islogin = true


  res.send({status:0, msg:'登录成功'})
})

// 获取用户姓名的接口
app.get('/api/username', (req, res) => {
  // 从session中获取用户的名称，响应给客户端
  if(!req.session.islogin){
    return res.send({status:1, msg:'fail'})
  }
  res.send({
    status:0,
    msg:'success',
    username:req.session.user.username
  })
})

// 退出登录的接口
app.post('/api/logout', (req, res)=>{
  req.session.destroy()
  res.send({
    status:0,
    msg:'退出登录成功',
  })
})