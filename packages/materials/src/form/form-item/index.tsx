import { createReactMaterial } from '@turbolc/core'
import { FormItemSetting } from './setting'
import { FormItemView, defaultProps } from './view'

export const __FormItem__ = createReactMaterial(
  FormItemView,
  {
    displayName: '表单元素',
    custom: {
      useCanvas: true,
    },
    related: {
      settingRender: FormItemSetting,
    },
  },
  {
    ...defaultProps,
  },
)
