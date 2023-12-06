import { transform } from 'sucrase'

interface ESModuleType {
  exports: {
    __esModule: boolean
    default: any
    [key: string]: any
  }
}

/**
 * 对js代码进行编译转换，兼容
 */
export const transformCode = (code: string) => {
  return new Promise<string>((resolve, reject) => {
    try {
      const bundleCode = transform(code, {
        transforms: ['typescript', 'imports', 'jsx'],
      }).code
      resolve(bundleCode)
    } catch (error) {
      reject(error)
    }
  })
}

/**
 * 执行bundleCode，并生成module.exports对象
 */
export const compileModuleResolve = (code: string, dependencies: Record<string, any> = {}) => {
  const module: ESModuleType = {
    exports: {
      __esModule: false,
      default: null as unknown,
    },
  }

  // 实现一个require方法，用于模块执行时挂载依赖
  const require = (packageName: string) => {
    if (dependencies[packageName]) {
      return dependencies[packageName]
    }
    throw new Error(`${packageName} is not found.`)
  }

  // 动态执行
  Function('require', 'exports', 'module', code)(require, module.exports, module)

  return module
}
