import { FrameworkContext, ReactMaterialViewType } from '@turbolc/core'
import { PropsWithChildren, useContext } from 'react'
import { Empty } from './Empty'

export const defaultProps: PropsWithChildren = {}

export const SlotView: ReactMaterialViewType<PropsWithChildren> = ({ children }, ref: any) => {
  const frameworkContext = useContext(FrameworkContext)

  const emptyRender = frameworkContext?.enabled ? <Empty /> : null

  return (
    <div ref={ref} style={{}}>
      {children ? children : emptyRender}
    </div>
  )
}
