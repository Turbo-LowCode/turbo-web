import { createReactMaterial } from '@turbolc/core'
import { BoxSetting } from './setting'
import { BoxView, defaultProps } from './view'

export const __Box__ = createReactMaterial(
  BoxView,
  {
    displayName: 'Box',
    custom: {
      useCanvas: true,
      useResize: true,
    },
    related: {
      settingRender: BoxSetting,
    },
  },
  {
    ...defaultProps,
  },
)
