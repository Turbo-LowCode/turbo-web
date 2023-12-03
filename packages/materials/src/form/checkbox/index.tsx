import { createReactMaterial } from '@turbolc/core'
import { CheckboxSetting } from './setting'
import { CheckboxView, defaultProps } from './view'

export const __Checkbox__ = createReactMaterial(
  CheckboxView,
  {
    displayName: '复选框',
    custom: {
      useCanvas: true,
      useResize: true,
    },
    related: {
      settingRender: CheckboxSetting,
    },
  },
  {
    ...defaultProps,
  },
)
