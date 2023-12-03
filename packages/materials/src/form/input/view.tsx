import { ProFormText } from '@ant-design/pro-components'
import { ReactMaterialViewType } from '@turbolc/core'
import { ComponentProps } from 'react'

export const defaultProps: ComponentProps<typeof ProFormText> = {}

export const InputView: ReactMaterialViewType<ComponentProps<typeof ProFormText>> = (props, ref: any) => {
  return (
    <div ref={ref}>
      <ProFormText {...props} />
    </div>
  )
}
