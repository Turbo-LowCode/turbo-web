import { createReactMaterial } from '@turbolc/core'
import { RowSetting } from './setting'
import { RowView, defaultProps } from './view'

export const __Row__ = createReactMaterial(
  RowView,
  {
    displayName: 'Row',
    custom: {
      useCanvas: true,
      useResize: true,
    },
    related: {
      settingRender: RowSetting,
    },
  },
  {
    ...defaultProps,
  },
)
