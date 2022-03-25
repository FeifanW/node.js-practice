// 1.导入http模块
const http = require('http')
// 2.创建web服务器实例
const server = http.createServer()
// 3.为服务器实例绑定 request 事件，监听客户端的请求
server.on('request', (req,res)=>{
  // req.url 是客户端请求的url地址
  const url = req.url
  // req.method 是客户端请求的method类型
  const method = req.method
  const str = `你请求的url地址是 ${url}, 请求的类型是 ${method}`

  // 调用res.setHeader() 方法，设置 Content-Type 响应头，解决中文乱码的问题
  res.setHeader('Content-Type','text/html; charset=utf-8')
  // 调用res.end() 向客户端响应一些内容
  res.end(str)
})
// 4.启动服务器
server.listen(80, function(){
  console.log('server running at http://127.0.0.1:80');
})