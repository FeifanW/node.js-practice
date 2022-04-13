// 导入express模块
const express = require('express')
// 创建express的服务器实例
const app = express()

const jwt = require('jsonwebtoken')          // 转化为token字符串
const expressJWT = require('express-jwt')     // 解析token

// 允许跨域资源共享
const cors = require('cors')
app.use(cors())

// 解析post表单数据的中间件
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

// 定义secret密钥，建议将密钥命名为secretKey
const secretKey = 'ABCabc123'

// 注册将JWT字符串解析还原成JSON对象的中间件
// 这个中间件可以把解析出来的用户信息挂载到req.user属性上
app.use(expressJWT({secret: secretKey}).unless({path:[/^\/api\//]}))

// 全局错误处理中间件，捕获解析JWT失败后产生的错误
app.use((err, req, res, next) => {
  如果这次错误是由token解析失败导致的
  if(err.name === 'UnauthorizedError'){
    return res.send({
      status:401,
      message:'无效的token'
    })
  }
  res.send({
    status:500,
    message:'未知的错误',
  })
})

// 登录接口
app.post('/api/login', function(req, res){
  // 将req.body请求体中的数据，转存为userinfo常量
  const userinfo = req.body
  // 登录失败
  if(userinfo.username !== 'admin' || userinfo.password !== '000000')
    return res.send({
      status:400,
      message:'登录失败！'
    })

  // 登录成功
  // 在登录成功之后，调用jwt.sign()方法生成JWT字符串，并通过token属性发送给客户端
  // 参数1：用户的信息对象
  // 参数2：加密的密钥
  // 参数3：配置对象，可以配置当前token的有效期
  const tokenStr = jwt.sign({username: userinfo.username}, secretKey, {expiresIn: '30s'})
  res.send({
    status:200,
    message:'登录成功！',
    token:tokenStr,     // 要发送给客户端token字符串
  })
})

// 这是一个有权限的API接口
app.get('/admin/getinfo', function(req, res){
  // 使用req.user获取用户信息，并使用data属性将用户信息发送给客户端
  console.log(req.user);
  res.send({
    status:200,
    message:'获取用户信息成功！',
    data:req.user,    // 要发送给客户端的用户信息
  })
})

