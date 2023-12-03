import { ProFormTextArea } from '@ant-design/pro-components'
import { ReactMaterialViewType } from '@turbolc/core'
import { ComponentProps } from 'react'

export const defaultProps: ComponentProps<typeof ProFormTextArea> = {}

export const TextAreaView: ReactMaterialViewType<ComponentProps<typeof ProFormTextArea>> = (
  { children, ...props },
  ref: any,
) => {
  return (
    <div ref={ref}>
      <ProFormTextArea {...props} />
    </div>
  )
}
