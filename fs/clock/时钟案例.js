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
  resolveCSS(dataStr)
  resolveJS(dataStr)
  resolveHTML(dataStr)
})

// 定义处理css样式的方法
function resolveCSS(htmlStr) {
  // 使用正则提取需要的内容
  const r1 = regStyle.exec(htmlStr)
  // 将提取出来的样式字符串进行字符串的replace替换操作
  const newCSS = r1[0].replace('<style>','').replace('</style>','')
  // 调用fs.writeFile()方法，将提取的样式，写入clock目录中 index.css的文件里面
  fs.writeFile(path.join(__dirname,'./index.css'), newCSS, function(err){
    if(err) return console.log('写入CSS样式失败' + err.message);
    console.log('写入样式文件成功！');
  })
}


// 定义处理js样式的方法
function resolveJS(htmlStr) {
  const r2 = regScript.exec(htmlStr)
  const newJS = r2[0].replace('<script>','').replace('</script>','')
  // 调用fs.writeFile()方法，将提取的样式，写入clock目录中 index.js的文件里面
  fs.writeFile(path.join(__dirname,'./index.js'), newJS, function(err){
    if(err) return console.log('写入JS失败' + err.message);
    console.log('写入JS成功！');
  })
}


// 定义处理HTML的方法
function resolveHTML(htmlStr) {
  const newHTML = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css"/>').replace
  (regScript,'<script src="./index.js"></script>')
  // 调用fs.writeFile()方法，将提取的样式，写入clock目录中 index.js的文件里面
  fs.writeFile(path.join(__dirname,'./index.html'), newHTML, function(err){
    if(err) return console.log('写入HTML失败' + err.message);
    console.log('写入HTML成功！');
  })
}