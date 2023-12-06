/**
 * 用于 JS Module 执行
 */

import {
  ExecuteResult,
  InjectVMVarsType,
  JSRuntimeCtxId,
  compileModuleResolve,
  createRuntimeVM,
  evalWrapper,
  transformCode,
} from '..'
import { logger } from '../utils'

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

const initScopeData: JSRuntimeVMScopeType = {
  jsModule: {},
  dependencies: {},
}

/**
 * 连接到 JS Runtime 上下文
 */
export const connectJSRuntimeVM = () => {
  const iframe = createRuntimeVM(JSRuntimeCtxId)
  const sandbox = iframe.contentWindow as JSRuntimeVMWindow
  if (!sandbox.turboScope) sandbox.turboScope = initScopeData

  return {
    iframe,
    sandbox,
  }
}

/**
 * 执行JS Module代码
 */
export const executeJSModule = (code: string, globalScope?: InjectVMVarsType): ExecuteResult => {
  try {
    const { sandbox } = connectJSRuntimeVM()
    sandbox.__INJECT_VARS__ = globalScope

    const data = sandbox.eval(evalWrapper(code))
    return { data, success: true, error: null }
  } catch (error) {
    return { error, success: false, data: null }
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
    logger.info('module', module)
    sandbox.turboScope.jsModule = module.exports
    logger.info('JS模块挂载成功')
  }
}

export const getTurboScopeJsModule = () => {
  const { sandbox } = connectJSRuntimeVM()
  return sandbox.turboScope.jsModule
}

export const getTurboScopeDependencies = () => {
  const { sandbox } = connectJSRuntimeVM()
  return sandbox.turboScope.dependencies
}
