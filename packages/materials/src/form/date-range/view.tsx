import { ProFormDateRangePicker } from '@ant-design/pro-components'
import { ReactMaterialViewType } from '@turbolc/core'
import { ComponentProps } from 'react'

export const defaultProps: ComponentProps<typeof ProFormDateRangePicker> = {}

export const DateRangePickerView: ReactMaterialViewType<ComponentProps<typeof ProFormDateRangePicker>> = (
  { children, ...props },
  ref: any,
) => {
  return (
    <div ref={ref}>
      <ProFormDateRangePicker {...props} />
    </div>
  )
}
