// 判断是否为表达式，即包含 {{}}
export const isExpression = (str: string) => {
  if (typeof str === 'string') {
    return /\{\{\s*([^}]+)?\s*\}\}/g.test(str)
  }
  return false
}

// 将 {{}} 包裹的表达式转换成模板字符串
export const parseStrToLte = (code: string) => {
  const result = code.replace(/\{\{(.+?)\}\}/g, '${$1}')
  return `\`${result}\``
}

console.log(parseStrToLte('props: {{props.code}}'))
