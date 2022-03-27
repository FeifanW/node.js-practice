// 在使用require加载用户自定义模块，会直接执行里面的内容
// 而且可以省略.js后缀名，node会自己补全
// const m = require('./log')

const custom = require('./模块作用域')
console.log(custom);

console.log("module", module);