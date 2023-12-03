import { FrameworkContext } from '@turbolc/core'
import { FC, PropsWithChildren, useContext } from 'react'
import { Empty } from './Empty'

interface SlotProps extends PropsWithChildren {
  empty?: string
}

export const Slot: FC<SlotProps> = ({ empty = '当前为插槽容器，打开右侧属性面板可以替换当前坑位。', children }) => {
  const frameworkContext = useContext(FrameworkContext)

  const emptyRender = frameworkContext?.enabled ? <Empty>{empty}</Empty> : null

  return children ? children : emptyRender
}
