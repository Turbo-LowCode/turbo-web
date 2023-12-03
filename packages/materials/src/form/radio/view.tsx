import { ProFormRadio } from '@ant-design/pro-components'
import { ReactMaterialViewType } from '@turbolc/core'
import { ComponentProps } from 'react'

export const defaultProps: ComponentProps<typeof ProFormRadio> = {}

export const RadioView: ReactMaterialViewType<ComponentProps<typeof ProFormRadio>> = (
  { children, ...props },
  ref: any,
) => {
  return (
    <div ref={ref}>
      <ProFormRadio {...props} />
    </div>
  )
}
