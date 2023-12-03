import { createReactMaterial } from '@turbolc/core'
import { PasswordSetting } from './setting'
import { PasswordView, defaultProps } from './view'

export const __Password__ = createReactMaterial(
  PasswordView,
  {
    displayName: '密码框',
    custom: {
      useCanvas: true,
      useResize: true,
    },
    related: {
      settingRender: PasswordSetting,
    },
  },
  {
    ...defaultProps,
  },
)
