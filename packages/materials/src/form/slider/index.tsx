import { createReactMaterial } from '@turbolc/core'
import { SliderSetting } from './setting'
import { SliderView, defaultProps } from './view'

export const __Slider__ = createReactMaterial(
  SliderView,
  {
    displayName: '滑动输入条',
    custom: {
      useCanvas: true,
      useResize: true,
    },
    related: {
      settingRender: SliderSetting,
    },
  },
  {
    ...defaultProps,
  },
)
