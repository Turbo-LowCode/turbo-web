import { createReactMaterial } from '@turbolc/core'
import { RadioSetting } from './setting'
import { RadioView, defaultProps } from './view'

export const __Radio__ = createReactMaterial(
  RadioView,
  {
    displayName: '单选框',
    related: {
      settingRender: RadioSetting,
    },
  },
  {
    ...defaultProps,
  },
)
