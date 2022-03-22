const fs = require('fs')
const path = require('path')

// 1.使用path.join() 方法可以把多个路径片段拼接成完整的路径字符串
// const pathStr = path.join('/a','/b/c','../../','./d','e')
// console.log(pathStr); 

// const pathStr2 = path.join(__dirname,'./1.txt')
// console.log(pathStr2); 

// 2.path.basename() 可以从一个文件路径中，获取到文件的名称部分
// const fpath = '/a/b/c/index.html'   // 文件的存放路径
// var fullName = path.basename(fpath)
// console.log(fullName);  // 输入index.html

// var name = path.basename(fpath,'.html')
// console.log(name);

// 3.path.extname() 获取路径的扩展名部分
const fpath = '/a/b/c/index.pdf'   // 文件的存放路径
const ext = path.extname(fpath)
console.log(ext);

