import { createReactMaterial } from '@turbo/core'
import { TitlePanel } from './panel'
import { TitleView } from './view'

export const __ArcoTitle__ = createReactMaterial(TitleView, {
  displayName: '标题',
  custom: {
    useResize: false,
  },
  related: {
    settingRender: TitlePanel,
  },
})
