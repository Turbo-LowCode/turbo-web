import { createReactMaterial } from '@turbolc/core'
import { LinkSetting } from './setting'
import { LinkView, defaultProps } from './view'

export const __AntDLink__ = createReactMaterial(
  LinkView,
  {
    displayName: '链接',
    custom: {
      useResize: false,
    },
    related: {
      settingRender: LinkSetting,
    },
  },
  {
    ...defaultProps,
  },
)
