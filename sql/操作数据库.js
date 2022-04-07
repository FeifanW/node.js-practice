// 导入mysql模块
const mysql = require('mysql')
const { MACROMAN } = require('mysql/lib/protocol/constants/charsets')
// 建立与MySQL数据库的连接关系
const db = mysql.createPool({
  host:'',     // 数据库的IP地址
  user:'',   // 登录数据库的账号
  password:'',  // 登录数据库的密码
  database:''
})

// 测试mysql模块能否正常工作
// db.query('select 1',(err, results)=>{
//   // mysql模块工作期间报错了
//   if(err) return console.log(err.message);
//   // 能够成功的执行SQL语句
//   console.log(results);
// })

// 查询users表中的所有数据
// const sqlStr = 'select * from users'
// db.query(sqlStr,(err, results) => {
//   // 查询数据失败
//   if(err) return console.log(err.message);
//   // 查询数据成功
//   console.log(results);
// })

// 向users表中， 新增一条数据，其中username的值为testName，password的值为123
// const user = {username:'testName',password:'123'}
// // 定义待执行的SQL语句
// const sqlStr = 'insert into users (username, password, status) values (?, ?, ?)'
// // 执行SQL语句
// db.query(sqlStr, [user.username, user.password, 0], (err, results) => {
//   // 执行SQL语句失败了
//   if(err) return console.log(err.message);
//   // 成功了
//   // 注意：如果执行的是insert into 插入语句，则results是一个对象
//   // 可以通过affectedRows属性，来判断是否插入数据成功
//   if(results.affectedRows === 1){
//     console.log("插入数据成功！");
//   }
// })

// 如果和表中的字段一一对应，可以用简便写法
// const user = {username:'testName',password:'123',status:0}
// // 定义待执行的SQL语句
// const sqlStr = 'insert into users SET ?'
// // 执行SQL语句
// db.query(sqlStr, user, (err, results) => {
//   // 执行SQL语句失败了
//   if(err) return console.log(err.message);
//   // 成功了
//   // 注意：如果执行的是insert into 插入语句，则results是一个对象
//   // 可以通过affectedRows属性，来判断是否插入数据成功
//   if(results.affectedRows === 1){
//     console.log("插入数据成功！");
//   }
// })

// 更新用户信息
// const user = {id:5, username:'aaa', password:'000', status:1}
// // 定义SQL语句
// const sqlStr = 'update users set username=?, password=?, status=? where id=?'
// // 执行SQL语句
// db.query(sqlStr, [user.username, user.password, user.status, user.id], (err, results) => {
//   if(err) return console.log(err.message);
//   if(results.affectedRows === 1){
//     console.log("更新成功");
//   }
// })


// 更新用户信息简便方式
// const user = {id:5, username:'aaaa', password:'0000', status:0}
// // 定义SQL语句
// const sqlStr = 'update users set ? where id=?'
// // 执行SQL语句
// db.query(sqlStr, [user, user.id], (err, results) => {
//   if(err) return console.log(err.message);
//   if(results.affectedRows === 1){
//     console.log("更新成功");
//   }
// })

// 删除数据
// const sqlStr = 'delete from users where id=?'
// // 调用db.query() 执行SQL语句时，为占位符指定具体的值
// // 如果SQL语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
// // 如果SQL语句中只有一个占位符，则可以省略数组
// db.query(sqlStr, 5, (err, results) => {
//   if(err) return console.log(err.message);
//   if(results.affectedRows === 1) {console.log("删除数据成功");}
// })

// 标记删除
const sqlStr = 'update users set status=? where id=?'
// 调用db.query() 执行SQL语句时，为占位符指定具体的值
// 如果SQL语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
// 如果SQL语句中只有一个占位符，则可以省略数组
db.query(sqlStr, [1, 4], (err, results) => {
  if(err) return console.log(err.message);
  if(results.affectedRows === 1) {console.log("标记删除成功");}
})