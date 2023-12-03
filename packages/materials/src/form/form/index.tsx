import { createReactMaterial } from '@turbolc/core'
import { FormSetting } from './setting'
import { FormView, defaultProps } from './view'

export const __Form__ = createReactMaterial(
  FormView,
  {
    displayName: '表单',
    custom: {
      useCanvas: true,
    },
    related: {
      settingRender: FormSetting,
    },
  },
  {
    ...defaultProps,
  },
)
