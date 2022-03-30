const tool = require('./tools')

// const dtStr = tool.dateFormat(new Date())
// console.log(dtStr);

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = tool.htmlEscape(htmlStr)
console.log(str);

const origin = tool.htmlUnEscape(str)
console.log(origin);