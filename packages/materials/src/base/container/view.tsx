import { CanvasRootId, ReactMaterialViewType } from '@turbolc/core'
import { ConfigProvider } from 'antd'
import { CSSProperties, PropsWithChildren } from 'react'

export const defaultProps: CSSProperties & PropsWithChildren = {
  height: '120px',
}

export const ProviderView: ReactMaterialViewType<CSSProperties & PropsWithChildren> = (
  { children, ...props },
  ref: any,
) => {
  const iframe = document.getElementById(CanvasRootId) as HTMLIFrameElement

  return (
    <ConfigProvider getPopupContainer={() => iframe?.contentDocument?.body || document.body}>
      <div ref={ref} style={{ ...props }}>
        {children}
      </div>
    </ConfigProvider>
  )
}
