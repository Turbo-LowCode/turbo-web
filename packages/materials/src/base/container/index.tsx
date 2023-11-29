import { ProviderView } from './view'
import { ProviderPanel } from './panel'
import { createReactMaterial } from '@turbo/core'

export const __Provider__ = createReactMaterial(ProviderView, {
  displayName: 'Provider',
  custom: {
    useCanvas: true,
    useResize: false,
  },
  related: {
    settingRender: ProviderPanel,
  },
})
