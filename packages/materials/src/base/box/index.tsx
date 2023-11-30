import { createReactMaterial } from '@turbo/core'
import { BoxPanel } from './panel'
import { BoxView } from './view'

export const __Box__ = createReactMaterial(BoxView, {
  displayName: 'Box',
  custom: {
    useCanvas: true,
    useResize: true,
  },
  related: {
    settingRender: BoxPanel,
  },
})
