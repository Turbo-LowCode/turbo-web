import { createReactMaterial } from '@turbolc/core'
import { TextSetting } from './setting'
import { TextView, defaultProps } from './view'

export const __AntDText__ = createReactMaterial(
  TextView,
  {
    displayName: '文本',
    related: {
      settingRender: TextSetting,
    },
  },
  {
    ...defaultProps,
  },
)
