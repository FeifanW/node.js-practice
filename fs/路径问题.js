const fs = require('fs')

// 出现路径拼接错误的问题，是因为提供了./ 或 ../开头的想对路径
// 如果要解决这个问题可以采用绝对路径
// fs.readFile('./成绩.txt','utf8', function(err, dataStr){
//   if(err){
//     return console.log("读取文件失败" + err.message)
//   }
//   console.log("读取文件成功" + dataStr);
// })

// 绝对路径写法  一个\代表转义  两个\代表斜线
// 缺点移植性差
// fs.readFile('D:\\practice Space\\node.js-practice\\fs\\成绩.txt','utf8', function(err, dataStr){
//   if(err){
//     return console.log("读取文件失败" + err.message)
//   }
//   console.log("读取文件成功" + dataStr);
// })


// __dirname代表当前文件所处目录
fs.readFile(__dirname + '/成绩.txt','utf8', function(err, dataStr){
  if(err){
    return console.log("读取文件失败" + err.message)
  }
  console.log("读取文件成功" + dataStr);
})
