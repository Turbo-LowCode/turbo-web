import { ProFormDatePicker } from '@ant-design/pro-components'
import { ReactMaterialViewType } from '@turbolc/core'
import { ComponentProps } from 'react'

export const defaultProps: ComponentProps<typeof ProFormDatePicker> = {}

export const DatePickerView: ReactMaterialViewType<ComponentProps<typeof ProFormDatePicker>> = (props, ref: any) => {
  return (
    <div ref={ref}>
      <ProFormDatePicker {...props} />
    </div>
  )
}
