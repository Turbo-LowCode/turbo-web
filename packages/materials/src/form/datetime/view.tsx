import { ProFormDateTimePicker } from '@ant-design/pro-components'
import { ReactMaterialViewType } from '@turbolc/core'
import { ComponentProps } from 'react'

export const defaultProps: ComponentProps<typeof ProFormDateTimePicker> = {}

export const DateTimePickerView: ReactMaterialViewType<ComponentProps<typeof ProFormDateTimePicker>> = (
  { children, ...props },
  ref: any,
) => {
  return (
    <div ref={ref}>
      <ProFormDateTimePicker {...props} />
    </div>
  )
}
