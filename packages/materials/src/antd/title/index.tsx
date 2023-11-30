import { createReactMaterial } from '@turbo/core'
import { TitleSetting } from './setting'
import { TitleView } from './view'

export const __ArcoTitle__ = createReactMaterial(TitleView, {
  displayName: '标题',
  custom: {
    useResize: false,
  },
  related: {
    settingRender: TitleSetting,
  },
})
