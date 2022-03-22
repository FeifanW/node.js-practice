// 导入fs模块
const fs = require('fs')
// 导入path模块
const path = require('path')

// 定义正则表达式，分别匹配style和script标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 调用fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname,'./index.html'),'utf8',function(err, dataStr){
  // 读取失败
  if(err) return console.log("读取HTML文件失败！" + err.message);
  // 读取成功后，分别调用三个方法，分别拆解出css、js和html文件
})