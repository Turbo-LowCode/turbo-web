import { createReactMaterial } from '@turbolc/core'
import { DatePickerSetting } from './setting'
import { DatePickerView, defaultProps } from './view'

export const __DatePicker__ = createReactMaterial(
  DatePickerView,
  {
    displayName: '日期',
    custom: {
      useCanvas: true,
      useResize: true,
    },
    related: {
      settingRender: DatePickerSetting,
    },
  },
  {
    ...defaultProps,
  },
)
