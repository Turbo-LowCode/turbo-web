import { createReactMaterial } from '@turbo/core'
import { ProviderSetting } from './setting'
import { ProviderView } from './view'

export const __Provider__ = createReactMaterial(ProviderView, {
  displayName: 'Provider',
  custom: {
    useCanvas: true,
    useResize: false,
  },
  related: {
    settingRender: ProviderSetting,
  },
})
