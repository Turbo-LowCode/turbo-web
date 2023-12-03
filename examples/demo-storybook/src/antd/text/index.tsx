import { createReactMaterial } from '@turbolc/core'
import { TextSetting } from './setting'
import { TextView } from './view'

export const __AntDText__ = createReactMaterial(TextView, {
  displayName: '文本',
  custom: {
    useResize: false,
  },
  related: {
    settingRender: TextSetting,
  },
})
