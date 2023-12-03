import { createReactMaterial } from '@turbolc/core'
import { DateTimeRangePickerSetting } from './setting'
import { DateTimeRangePickerView, defaultProps } from './view'

export const __DateTimeRangePicker__ = createReactMaterial(
  DateTimeRangePickerView,
  {
    displayName: '日期时间区间',
    related: {
      settingRender: DateTimeRangePickerSetting,
    },
  },
  {
    ...defaultProps,
  },
)
