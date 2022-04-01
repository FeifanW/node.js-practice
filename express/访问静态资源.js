const express = require('express')
const app = express()

// 在这里，调用express.static()方法，快速的对外提供静态资源
// app.use(express.static('./public'))

// 如果托管多个静态资源目录，需要多次调用express.static()函数
// app.use(express.static('./files'))

// 添加路径前缀
app.use('/abcd',express.static('./files'))

app.listen(80, ()=>{
  console.log("express server running at http://127.0.0.1");
})