import { createReactMaterial } from '@turbo/core'
import { ButtonPanel } from './panel'
import { ButtonView } from './view'

export const __AntDButton__ = createReactMaterial(ButtonView, {
  displayName: '按钮',
  custom: {
    useResize: false,
  },
  related: {
    settingRender: ButtonPanel,
  },
})
