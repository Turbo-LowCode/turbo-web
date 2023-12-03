import { createReactMaterial } from '@turbolc/core'
import { InputSetting } from './setting'
import { InputView, defaultProps } from './view'

export const __Input__ = createReactMaterial(
  InputView,
  {
    displayName: '输入框',
    related: {
      settingRender: InputSetting,
    },
  },
  {
    ...defaultProps,
  },
)
