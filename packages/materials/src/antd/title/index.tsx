import { createReactMaterial } from '@turbolc/core'
import { TitleSetting } from './setting'
import { TitleView, defaultProps } from './view'

export const __ArcoTitle__ = createReactMaterial(
  TitleView,
  {
    displayName: '标题',
    related: {
      settingRender: TitleSetting,
    },
  },
  {
    ...defaultProps,
  },
)
