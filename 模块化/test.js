// 在使用require加载用户自定义模块，会直接执行里面的内容
// 而且可以省略.js后缀名，node会自己补全
// const m = require('./log')

const custom = require('./模块作用域')
console.log(custom);

// console.log("module", module);
// console.log("exports和module.exports是否相等",exports === module.exports);

// Node.js遵循了CommonJS模块化规范
// CommonJS模块化规范：
// 1.每个模块内部，module变量代表当前模块
// 2.module变量是一个对象，它的exports属性（即module.exoprts）是对外的接口
// 3.加载某个模块，其实是加载改模块的module.exoprts属性，require()方法用于加载模块