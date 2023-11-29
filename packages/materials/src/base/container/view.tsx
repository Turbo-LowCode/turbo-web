import { CanvasRootId, ReactMaterialViewType } from '@turbo/core'
import { ConfigProvider } from 'antd'
import { PropsWithChildren } from 'react'

export const ProviderView: ReactMaterialViewType<React.CSSProperties & PropsWithChildren> = (
  { children, ...props },
  ref: any,
) => {
  const iframe = document.getElementById(CanvasRootId) as HTMLIFrameElement

  return (
    <ConfigProvider getPopupContainer={() => iframe.contentDocument?.body || document.body}>
      <div ref={ref} style={{ ...props }}>
        {children}
      </div>
    </ConfigProvider>
  )
}