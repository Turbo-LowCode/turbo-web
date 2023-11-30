import { createReactMaterial } from '@turbo/core'
import { BoxSetting } from './setting'
import { BoxView } from './view'

export const __Box__ = createReactMaterial(BoxView, {
  displayName: 'Box',
  custom: {
    useCanvas: true,
    useResize: true,
  },
  related: {
    settingRender: BoxSetting,
  },
})
