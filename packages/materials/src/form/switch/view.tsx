import { ProFormSwitch } from '@ant-design/pro-components'
import { ReactMaterialViewType } from '@turbolc/core'
import { ComponentProps } from 'react'

export const defaultProps: ComponentProps<typeof ProFormSwitch> = {}

export const SwitchView: ReactMaterialViewType<ComponentProps<typeof ProFormSwitch>> = (
  { children, ...props },
  ref: any,
) => {
  return (
    <div ref={ref}>
      <ProFormSwitch {...props} />
    </div>
  )
}
