// 定义格式化时间的函数
function dateFormat(dateStr) {
  const dt = new Date(dateStr)
  const y = dt.getFullYear()
  const m = padZero(dt.getMonth() + 1) 
  const d =  padZero(dt.getDate())
  const hh = padZero(dt.getHours()) 
  const mm = padZero(dt.getMinutes()) 
  const ss = padZero(dt.getSeconds()) 
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

// 定义一个补零的函数
function padZero(n) {
  return n > 9 ? n : '0'+n
}

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

// 向外暴露成员
module.exports = {
  dateFormat,
  htmlEscape,
  htmlUnEscape
}