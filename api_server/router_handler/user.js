// 导入数据库操作模块
const db = require('../db/index')
// 导入bcryptjs这个包
const bcrypt = require('bcryptjs')

// 注册新用户的处理函数
exports.regUser = (req, res)=>{
  // 获取客户端提交到服务器的用户信息
  const userinfo = req.body
  // console.log(userinfo);
  // 判断数据是否合法
  if(!userinfo.username || !userinfo.password){
    return res.send({status:1, message:'用户名或密不合法！'})
  }

  // 定义SQL语句，查询用户名是否被占用
  const sqlStr = 'select * from ev_users where username=?'
  db.query(sqlStr, userinfo.username, (err, results) => {
    // 执行SQL语句失败
    if(err) {
      return res.send({status:1, message:err.message})
    }
    // 判断用户名是否被占用
    if(results.length > 0){
      return res.send({status:1, message:'用户名被占用，请更换其他用户名！'})
    }
  })
  // TODO：用户名可用继续后续的流程
  // 调用bcrypt.hashSync()对密码进行加密
  // console.log(userinfo);
  userinfo.password = bcrypt.hashSync(userinfo.password, 10)
  // console.log(userinfo);

  const sql = 'insert into ev_users set ?'
  // 调用db.query()执行SQL语句
  db.query(sql, {username: userinfo.username, password: userinfo.password}, (err, results) => {
    // 判断SQL语句是否执行成功
    if(err) return res.send({status:1, message:err.message})
    // 判断影响行数是否为1
    if(results.affectedRows !== 1) return res.send({status:1, message:'注册用户失败，请稍后再试！'})
    // 注册用户成功
    res.send({status:0, message:'注册成功！'})
  })

  // res.send('reguser OK')
}

// 登录的处理函数
exports.login = (req, res) => {
  res.send('login OK')
}