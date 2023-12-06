export type InjectVMVarsType = Record<string, unknown>

export interface ExecuteResult<T = any> {
  success: boolean
  data: T
  error?: any
}
