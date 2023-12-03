import { createReactMaterial } from '@turbolc/core'
import { ColSetting } from './setting'
import { ColView, defaultProps } from './view'

export const __Col__ = createReactMaterial(
  ColView,
  {
    displayName: 'Col',
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
