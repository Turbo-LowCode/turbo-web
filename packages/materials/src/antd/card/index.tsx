import { createReactMaterial } from '@turbolc/core'
import { CardSetting } from './setting'
import { CardView, defaultProps } from './view'

export const __AntDCard__ = createReactMaterial(
  CardView,
  {
    displayName: '卡片',
    props: {},
    custom: {
      useCanvas: true,
    },
    related: {
      settingRender: CardSetting,
    },
  },
  {
    ...defaultProps,
  },
)
