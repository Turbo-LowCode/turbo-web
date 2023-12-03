import { createReactMaterial } from '@turbolc/core'
import { SegmentSetting } from './setting'
import { SegmentView, defaultProps } from './view'

export const __Segment__ = createReactMaterial(
  SegmentView,
  {
    displayName: '分段选择器',
    related: {
      settingRender: SegmentSetting,
    },
  },
  {
    ...defaultProps,
  },
)
