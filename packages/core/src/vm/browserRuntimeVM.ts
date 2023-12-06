/**
 * 用于 模板字符串解析 执行
 */

import { ExecuteResult, InjectVMVarsType } from '@/types'
import { createRuntimeVM, evalWrapper } from '..'
import { RuntimeVMId } from '../utils/const'

interface BrowserRuntimeVMWindow extends Window {
  __INJECT_VARS__?: InjectVMVarsType
  eval: typeof window.eval
}

class BrowserRuntimeVM {
  private iframe: HTMLIFrameElement | null = null

  constructor() {
    this.createIFrame()
  }

  private createIFrame() {
    this.iframe = createRuntimeVM(RuntimeVMId)
  }

  private executeCode(code: string, globalScope: InjectVMVarsType) {
    if (!this.iframe) this.createIFrame()

    const sandbox = this.iframe.contentWindow as BrowserRuntimeVMWindow
    sandbox.__INJECT_VARS__ = globalScope

    // eval 创造一个沙盒环境去执行代码
    return sandbox.eval(evalWrapper(code))
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
