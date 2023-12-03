import { ProFormCheckbox } from '@ant-design/pro-components'
import { ReactMaterialViewType } from '@turbolc/core'
import { ComponentProps } from 'react'

export const defaultProps: ComponentProps<typeof ProFormCheckbox> = {}

export const CheckboxView: ReactMaterialViewType<ComponentProps<typeof ProFormCheckbox>> = (
  { children, ...props },
  ref: any,
) => {
  return (
    <div ref={ref}>
      <ProFormCheckbox {...props} />
    </div>
  )
}
