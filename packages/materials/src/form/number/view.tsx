import { ProFormDigit } from '@ant-design/pro-components'
import { ReactMaterialViewType } from '@turbolc/core'
import { ComponentProps } from 'react'

export const defaultProps: ComponentProps<typeof ProFormDigit> = {}

export const NumberView: ReactMaterialViewType<ComponentProps<typeof ProFormDigit>> = (props, ref: any) => {
  return (
    <div ref={ref}>
      <ProFormDigit {...props} />
    </div>
  )
}
