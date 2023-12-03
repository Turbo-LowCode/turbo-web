import { createReactMaterial } from '@turbolc/core'
import { SlotSetting } from './setting'
import { SlotView, defaultProps } from './view'

export const __Slot__ = createReactMaterial(
  SlotView,
  {
    displayName: 'Row',
    custom: {
      useCanvas: true,
      useResize: true,
    },
    related: {
      settingRender: SlotSetting,
    },
  },
  {
    ...defaultProps,
  },
)
