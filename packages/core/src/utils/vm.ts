/**
 * 创建一个沙盒容器
 */
export const createRuntimeVM = (id: string) => {
  let iframe = document.getElementById(id) as HTMLIFrameElement
  if (!iframe) {
    iframe = document.createElement('iframe')
    // iframe 中的脚本只能访问与主文档具有相同源的内容，并且只能运行;JavaScript 脚本。
    // 这可以保证 iframe 与主文档之间的安全隔离，防止 iframe 中的恶意脚本影响主文档
    iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts')
    iframe.style.display = 'none'
    iframe.id = id
    document.documentElement.appendChild(iframe)
  }
  return iframe
}

/**
 * 对执行的eval包裹函数提取出来
 */
export const evalWrapper = (code: string) => `
    (() => {
      with (window.__INJECT_VARS__) {
        return (${code})
      }
    })()
  `
