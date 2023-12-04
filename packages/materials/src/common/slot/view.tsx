import { FrameworkContext, ReactMaterialViewType } from '@turbolc/core'
import { PropsWithChildren, useContext } from 'react'
import { Empty } from './Empty'

interface SlotProps extends PropsWithChildren {
  message?: string
}

export const defaultProps: SlotProps = {
  message: '当前为插槽容器，打开右侧属性面板可以替换当前坑位。',
}

export const SlotView: ReactMaterialViewType<SlotProps> = ({ message, children }, ref: any) => {
  const frameworkContext = useContext(FrameworkContext)

  const emptyRender = frameworkContext?.enabled ? <Empty>{message}</Empty> : null

  return <div ref={ref}>{children ? children : emptyRender}</div>
}
