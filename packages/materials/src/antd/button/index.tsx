import { createReactMaterial } from '@turbolc/core'
import { ButtonSetting } from './setting'
import { ButtonView, defaultProps } from './view'

export const __AntDButton__ = createReactMaterial(
  ButtonView,
  {
    displayName: '按钮',
    related: {
      settingRender: ButtonSetting,
    },
  },
  {
    ...defaultProps,
    href: undefined,
  },
)
