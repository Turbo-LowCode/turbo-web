import { createReactMaterial } from '@turbolc/core'
import { ProviderSetting } from './setting'
import { ProviderView, defaultProps } from './view'

export const __Provider__ = createReactMaterial(
  ProviderView,
  {
    displayName: 'Provider',
    custom: {
      useCanvas: true,
    },
    related: {
      settingRender: ProviderSetting,
    },
  },
  {
    ...defaultProps,
  },
)
