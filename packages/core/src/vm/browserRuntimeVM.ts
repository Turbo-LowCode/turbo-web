import { BrowserRuntimeVMWindow, ExecuteResult, InjectVMVarsType } from '@/types'

class BrowserRuntimeVM {
  private iframe: HTMLIFrameElement | null = null

  constructor() {
    this.createIFrame()
  }

  private createIFrame() {
    this.iframe = document.createElement('iframe')
    // iframe 中的脚本只能访问与主文档具有相同源的内容，并且只能运行;JavaScript 脚本。
    // 这可以保证 iframe 与主文档之间的安全隔离，防止 iframe 中的恶意脚本影响主文档
    this.iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts')
    this.iframe.style.display = 'none'
    document.documentElement.appendChild(this.iframe)
  }

  private executeCode(code: string, globalScope: InjectVMVarsType) {
    if (!this.iframe) this.createIFrame()

    const sandbox = this.iframe!.contentWindow as BrowserRuntimeVMWindow
    sandbox.__INJECT_VARS__ = globalScope

    // eval 创造一个沙盒环境去执行代码
    return sandbox.eval(`
      (() => {
        with (window.__INJECT_VARS__) {
          return (${code})
        }
      })()
    `)
  }

  execute(code: string, globalScope: InjectVMVarsType): ExecuteResult {
    try {
      const res = this.executeCode(code, globalScope)
      return { success: true, data: res }
    } catch (err) {
      return { success: true, data: null, error: err }
    }
  }
}

export const browserRuntimeVM = typeof window !== 'undefined' ? new BrowserRuntimeVM() : null
