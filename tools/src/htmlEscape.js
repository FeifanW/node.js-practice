// 定义转义 HTML 字符的函数
function htmlEscape(htmlstr) {
  return htmlstr.replace(/<|>|"|&/g, match => {
    switch(match) {
      case '<':
        return '&lt;'
      case '>':
        return '&get;'
      case '"':
        return '&quot;'
      case '&':
        return '&amp;'
    }
  })
}


// 定义还原 HTML 字符的函数
function htmlUnEscape(str) {
  return str.replace(/&lt;|&get;|&quot;|&amp/g, match => {
    switch(match) {
      case '&lt;':
        return '<'
      case '&get;':
        return '>'
      case '&quot;':
        return '"'
      case '&amp':
        return '&'
    }
  })
}

module.exports = {
  htmlEscape,
  htmlUnEscape
}