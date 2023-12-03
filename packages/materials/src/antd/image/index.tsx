import { createReactMaterial } from '@turbolc/core'
import { ImageSetting } from './setting'
import { ImageView, defaultProps } from './view'

export const __AntDImage__ = createReactMaterial(
  ImageView,
  {
    displayName: '图片',
    custom: {
      useResize: false,
    },
    related: {
      settingRender: ImageSetting,
    },
  },
  {
    ...defaultProps,
  },
)
