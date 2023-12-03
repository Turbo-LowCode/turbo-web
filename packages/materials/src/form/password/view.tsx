import { ProFormText } from '@ant-design/pro-components'
import { ReactMaterialViewType } from '@turbolc/core'
import { ComponentProps } from 'react'

export const defaultProps: ComponentProps<typeof ProFormText.Password> = {}

export const PasswordView: ReactMaterialViewType<ComponentProps<typeof ProFormText.Password>> = (
  { children, ...props },
  ref: any,
) => {
  return (
    <div ref={ref}>
      <ProFormText.Password {...props} />
    </div>
  )
}
