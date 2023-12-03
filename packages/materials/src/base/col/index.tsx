import { createReactMaterial } from '@turbolc/core'
import { ColSetting } from './setting'
import { ColView, defaultProps } from './view'

export const __Col__ = createReactMaterial(
  ColView,
  {
    displayName: '容器 - 列',
    custom: {
      useCanvas: true,
      useResize: true,
    },
    related: {
      settingRender: ColSetting,
    },
  },
  {
    ...defaultProps,
  },
)
