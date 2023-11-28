import { createReactMaterial } from '@turbo/core'
import NumberSettings from './settings'
import NumberView from './view'

const _Number = createReactMaterial(NumberView, {
  displayName: 'TextArea',
  related: {
    settings: NumberSettings,
  },
})

export default _Number
