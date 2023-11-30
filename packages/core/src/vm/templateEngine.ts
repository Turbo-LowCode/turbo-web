type Obj = Record<string, any>

// 解析字符串变量
const getDataByPath = (obj: Obj, path: string) => {
  const paths = path.split('.')
  let data = obj
  for (const p of paths) {
    data = data[p]
  }
  return data
}

// 解析表达式
const getDataByExpression = (obj: Obj, expression: string) => {
  const func = new Function('data', `return ${expression}`)
  return func(obj)
}

// 模板引擎渲染
export const render = (template: string, data: Obj) => {
  // 匹配 {{ 变量名 }} 和 {{ 表达式 }}
  return template.replace(/{{\s*([\w.]+)\s*}}|{{\s*(.*?)\s*}}/g, (_, p1, p2) => {
    if (p1) return getDataByPath(data, p1)
    return getDataByExpression(data, p2)
  })
}
