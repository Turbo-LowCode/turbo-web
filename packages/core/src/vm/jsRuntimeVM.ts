/**
 * 用于 JS Module 执行
 */

import { JSRuntimeCtxId, compileModuleResolve, transformCode } from '..'

export type InjectVMVarsType = Record<string, unknown>

export interface JSRuntimeVMScopeType {
  jsModule: InjectVMVarsType
  dependencies: InjectVMVarsType
}

interface JSRuntimeVMWindow extends Window {
  __INJECT_VARS__?: InjectVMVarsType // 插入的上下文
  logger: typeof console // 日志打印函数
  eval: typeof window.eval // eval的函数声明
  turboScope: JSRuntimeVMScopeType // turbolc
}

export interface ExecuteResult {
  value: any
  error: any
  success: boolean
}

const initScopeData: JSRuntimeVMScopeType = {
  jsModule: {},
  dependencies: {},
}

/**
 * 连接到 JS Runtime 上下文
 */
export const connectJSRuntimeVM = () => {
  let iframe = document.getElementById(JSRuntimeCtxId) as HTMLIFrameElement

  try {
    if (!iframe) {
      iframe = document.createElement('iframe')
      iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts')
      iframe.style.display = 'none'
      iframe.id = JSRuntimeCtxId
      document.documentElement.appendChild(iframe)
      const sandbox = iframe.contentWindow as JSRuntimeVMWindow
      sandbox.turboScope = initScopeData
    }
    return {
      ref: iframe,
      sandbox: iframe.contentWindow as JSRuntimeVMWindow,
    }
  } catch (error) {
    throw new Error('[turbo]: connectRuntimeVM fail...')
  }
}

/**
 * 执行JS Module代码
 */
export const executeJSModule = (code: string, globalScope?: InjectVMVarsType): ExecuteResult => {
  try {
    const { sandbox } = connectJSRuntimeVM()

    sandbox.__INJECT_VARS__ = globalScope

    const value = sandbox.eval(`
        (() => {
          with (window.__INJECT_VARS__) {
            return (${code})
          }
        })()
      `)

    return { value, success: true, error: null }
  } catch (error) {
    return { success: false, error, value: null }
  }
}

/**
 * 挂载当前 JS Module 到 VM
 */
export const mountJSModule = async (code: string) => {
  const { sandbox } = connectJSRuntimeVM()
  const cjsCode = await transformCode(code)
  if (cjsCode) {
    const module = compileModuleResolve(cjsCode, sandbox.turboScope.dependencies)
    console.log(module, 'module')
    sandbox.turboScope.jsModule = module.exports
    console.log('JS模块挂载成功')
  }
}
