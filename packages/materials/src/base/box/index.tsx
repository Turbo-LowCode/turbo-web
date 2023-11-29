import { createReactMaterial } from '@turbo/core'
import { BoxPanel } from './panel'
import { BoxView } from './view'

export const __Box__ = createReactMaterial(BoxView, {
  displayName: 'Box',
  // props: {
  //   defaultSize: {
  //     width: '100%',
  //     height: 120,
  //   },
  // },
  custom: {
    useCanvas: true,
    useResize: true,
  },
  related: {
    settingRender: BoxPanel,
  },
})
