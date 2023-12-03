import { createReactMaterial } from '@turbolc/core'
import { TextAreaSetting } from './setting'
import { TextAreaView, defaultProps } from './view'

export const __TextArea__ = createReactMaterial(
  TextAreaView,
  {
    displayName: '多行输入框',
    related: {
      settingRender: TextAreaSetting,
    },
  },
  {
    ...defaultProps,
  },
)
