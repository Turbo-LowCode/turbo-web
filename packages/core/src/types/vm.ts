export type InjectVMVarsType = Record<string, unknown>

export interface ExecuteResult<T = any> {
  success: boolean
  data: T
  error?: any
}

export interface BrowserRuntimeVMWindow extends Window {
  __INJECT_VARS__?: InjectVMVarsType
  eval: typeof window.eval
}
