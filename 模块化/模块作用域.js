const username = '张三'
module.exports.sayHello = function() {
  console.log('大家好我是' + username);
}
module.exports.username = 'feifan'
exports.today = '20220328'
// 使用require()导入模块时导入的结果永远以module.exports指向的对象为准
// module.exports = {
//   test:"新的对象"
// }