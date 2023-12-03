import { ProFormDateTimeRangePicker } from '@ant-design/pro-components'
import { ReactMaterialViewType } from '@turbolc/core'
import { ComponentProps } from 'react'

export const defaultProps: ComponentProps<typeof ProFormDateTimeRangePicker> = {}

export const DateTimeRangePickerView: ReactMaterialViewType<ComponentProps<typeof ProFormDateTimeRangePicker>> = (
  { children, ...props },
  ref: any,
) => {
  return (
    <div ref={ref}>
      <ProFormDateTimeRangePicker {...props} />
    </div>
  )
}
