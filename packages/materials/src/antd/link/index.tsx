import { createReactMaterial } from '@turbo/core'
import { LinkPanel } from './panel'
import { LinkView } from './view'

export const __AntDLink__ = createReactMaterial(LinkView, {
  displayName: '链接',
  custom: {
    useResize: false,
  },
  related: {
    settingRender: LinkPanel,
  },
})
