import { createReactMaterial } from '@turbolc/core'
import { SwitchSetting } from './setting'
import { SwitchView, defaultProps } from './view'

export const __Switch__ = createReactMaterial(
  SwitchView,
  {
    displayName: '开关',
    custom: {
      useCanvas: true,
      useResize: true,
    },
    related: {
      settingRender: SwitchSetting,
    },
  },
  {
    ...defaultProps,
  },
)
