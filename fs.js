// fs模块时node官方提供的操作文件的模块
// fs.readFile()   读取文件中的内容
// fs.writeFile()  向指定文件中写入内容
// 引用fs模块需要按下面来引用
const fs = require('fs')

// 一、fs.readFile()
// 练习读取fs.text里的内容 fs.readFile()
// fs.readFile() 的参数
// 参数1：文件的路径
// 参数2：读取文件的编码格式，一般默认指定utf-8
// 参数3：回调函数，拿到读取失败和成功的结果 err dataStr
//        读取成功err为null，读取失败err为错误对象，dataStr的值为undefined
fs.readFile('./fs.txt','utf8',function(err, dataStr){
  if(err){
    return console.log('读取文件失败！' + err.message);
  }
  console.log('读取文件成功'+ dataStr);
})