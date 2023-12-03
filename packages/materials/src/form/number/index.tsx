import { createReactMaterial } from '@turbolc/core'
import { NumberSetting } from './setting'
import { NumberView, defaultProps } from './view'

export const __Number__ = createReactMaterial(
  NumberView,
  {
    displayName: '数字输入框',
    related: {
      settingRender: NumberSetting,
    },
  },
  {
    ...defaultProps,
  },
)
