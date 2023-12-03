import { createReactMaterial } from '@turbolc/core'
import { DateTimePickerSetting } from './setting'
import { DateTimePickerView, defaultProps } from './view'

export const __DateTimePicker__ = createReactMaterial(
  DateTimePickerView,
  {
    displayName: '日期时间',
    related: {
      settingRender: DateTimePickerSetting,
    },
  },
  {
    ...defaultProps,
  },
)
