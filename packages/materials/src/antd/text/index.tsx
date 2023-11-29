import { TextView } from './view'
import { TextPanel } from './panel'
import { createReactMaterial } from '@turbo/core'

export const __AntDText__ = createReactMaterial(TextView, {
  displayName: '文本',
  custom: {
    useResize: false,
  },
  related: {
    settingRender: TextPanel,
  },
})
