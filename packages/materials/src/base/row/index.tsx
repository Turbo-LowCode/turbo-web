import { createReactMaterial } from '@turbolc/core'
import { RowSetting } from './setting'
import { RowView, defaultProps } from './view'

export const __Row__ = createReactMaterial(
  RowView,
  {
    displayName: '容器 - 行',
    custom: {
      useCanvas: true,
    },
    related: {
      settingRender: RowSetting,
    },
  },
  {
    ...defaultProps,
  },
)
