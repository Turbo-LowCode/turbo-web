import { createReactMaterial } from '@turbolc/core'
import { DateRangePickerSetting } from './setting'
import { DateRangePickerView, defaultProps } from './view'

export const __DateRangePicker__ = createReactMaterial(
  DateRangePickerView,
  {
    displayName: '日期区间',
    custom: {
      useCanvas: true,
      useResize: true,
    },
    related: {
      settingRender: DateRangePickerSetting,
    },
  },
  {
    ...defaultProps,
  },
)
