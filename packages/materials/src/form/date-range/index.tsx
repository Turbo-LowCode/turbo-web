import { createReactMaterial } from '@turbolc/core'
import { DateRangePickerSetting } from './setting'
import { DateRangePickerView, defaultProps } from './view'

export const __DateRangePicker__ = createReactMaterial(
  DateRangePickerView,
  {
    displayName: '日期区间',
    related: {
      settingRender: DateRangePickerSetting,
    },
  },
  {
    ...defaultProps,
  },
)
