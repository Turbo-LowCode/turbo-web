import { createReactMaterial } from '@turbolc/core'
import { SlotSetting } from './setting'
import { SlotView, defaultProps } from './view'

export const __Slot__ = createReactMaterial(
  SlotView,
  {
    displayName: '插槽',
    custom: {
      useCanvas: true,
    },
    related: {
      settingRender: SlotSetting,
    },
  },
  {
    ...defaultProps,
  },
)
