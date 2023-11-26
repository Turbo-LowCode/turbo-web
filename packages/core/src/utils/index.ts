import { RuntimeCtxId } from './const'

export * from './const'

export const createRuntmieContext = () => {
  let iframe = document.getElementById(RuntimeCtxId) as HTMLIFrameElement
  try {
    if (!iframe) {
      iframe = document.createElement('iframe')
      iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts')
      iframe.style.display = 'none'
      iframe.id = RuntimeCtxId
      document.documentElement.appendChild(iframe)
    }

    return iframe
  } catch (error) {
    console.error('初始化执行容器失败')
    return null
  }
}
