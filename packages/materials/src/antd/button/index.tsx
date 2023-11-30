import { createReactMaterial } from '@turbo/core'
import { ButtonSetting } from './setting'
import { ButtonView } from './view'

export const __AntDButton__ = createReactMaterial(ButtonView, {
  displayName: '按钮',
  custom: {
    useResize: false,
  },
  related: {
    settingRender: ButtonSetting,
  },
})
